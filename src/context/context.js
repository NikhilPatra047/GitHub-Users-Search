import React, { createContext, useState } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

export const GithubContext = createContext(); 

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos); 
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async(user) => {
    toggleError();
    setLoading(true);
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err));
    if(response) {
      setUsers(response.data);
      const { login, followers_url } = response.data; 
      axios(`${rootUrl}/users/${login}/repos?per_page=100`)
      .then((res) => setRepos(res.data))
      .catch((err) => console.log(err));

      axios(`${followers_url}?per_page=100`) 
      .then((res) => setFollowers(res.data))
      .catch((err) => console.log(err));

      //Promise.allSettled runs all async operations and returns data after all operations are either fulfilled or rejected. 
      await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${followers_url}?per_page=100`)])
      .then((results) => {
        const [repos, followers] = results; 
        const status = "fulfilled"; 
        if(repos.status === status) {
          setRepos(repos.value.data); 
        }
        if(followers.status === status) {
          setFollowers(followers.value.data);
        }
      })
      .catch((err) => console.log(err));
    } else {
      toggleError(true, 'There is no user with that user name.'); 
    }
    checkRequests();
    setLoading(false);
  }

  const checkRequests = () => {
    toggleError();
    axios.get(`${rootUrl}/rate_limit`)
    .then((data) => {
      const { rate: { remaining } } = data.data; 
      setRequests(remaining);
      if(remaining === 0) {
        toggleError(true, 'Sorry, you have exceeded your hourly daily rate limit');
      }
    })
    .catch((err) => console.log(err));
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  React.useEffect(checkRequests, []);

  return (
    <GithubContext.Provider value={{ searchGithubUser, error, requests, loading, users, setUsers, repos, setRepos, followers, setFollowers }}>
      { children }
    </GithubContext.Provider>
  );
};
