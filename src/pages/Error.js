import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper> 
        <div>
          <h1>404</h1>
          <h3>Sorry, the page you tried cannot be found</h3>
          <Link to="/" exact={true}>
            <button type="button" className='btn'>
              Go Back
            </button>
          </Link>
        </div>
    </Wrapper>
  );
};

// The Wrapper is a section that has been styled. Inside it 
const Wrapper = styled.section`
  border: 1px solid black;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
