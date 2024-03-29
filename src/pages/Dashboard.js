import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  const { loading } = React.useContext(GithubContext);

  if(loading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img className='loading-img' src={loadingImage} alt="Loading" />
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
