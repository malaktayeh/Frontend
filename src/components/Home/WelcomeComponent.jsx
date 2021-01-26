import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../../scss/home.module.scss';

export default function WelcomeComponent({ setLoading }) {
  async function handleGithubSignIn(e) {
    setLoading(true);
    e.preventDefault();
    Router.replace(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/auth/github`
    );
    setLoading(false);
    return null;
  }

  return (
    <div id="welcome" className={styles['welcome-container']}>
      <div className={styles['welcome-left']}>
        <div >
          <img src='/essential_SVG/welcome_page_rectangle.svg' alt='vertical rectangle'/>
        <h1 className={styles['welcome-title']}>
          Explore the World of
          <br/>
          Open Sourcing
        </h1>
        </div>
       
        <p className={styles['landing-text']}>
        &quot;CodeTrophs&quot; is an open source platform
          targeted solely for beginners to help
          them contribute to real life projects.{' '}
        </p>

        <div className={styles['sign-in-buttons']}>
          <button
            className={styles['github-button']}
            type="submit"
            onClick={handleGithubSignIn}>
            <img
              alt="Icon-awesome-github.png"
              src="/images/Iconawesome-github.png"
            />
            <p>Sign in with Github</p>
            <img alt="Right-Arrow.svg" src="/icons/arrow-right.png" />
          </button>
        </div>
      </div>

      <div className={styles['welcome-right']}>
        <img alt="welcome page svg" src="/essential_SVG/welcome_page.svg" />
      </div>
    </div>
  );
}

WelcomeComponent.propTypes = {
  setLoading: PropTypes.func.isRequired
};

// <div className={styles['welcome-container'] }>
//   <div className={styles['welcome-left']}>
//     <h1 className={styles['welcome-title']}>
//       A one spot Destination for your <br />
//       Open Source Contribution Journey
//     </h1>
//     <p className={styles['landing-text']}>
//       Now Explore from 120000+ Top
//       <br />
//       Open Source Projects at One Place
//     </p>

//     <div className={styles['sign-in-buttons']}>
//       <button
//         className={styles['github-button']}
//         type="submit"
//         onClick={handleGithubSignIn}>
//         <img
//           alt="Icon-awesome-github.png"
//           src="/images/Iconawesome-github.png"
//         />
//         <p>Sign in with Github</p>
//         <img alt="Right-Arrow.svg" src="/icons/arrow-right.png" />
//       </button>

//     </div>
//   </div>

//   <div className={styles['welcome-right']}>
//     <img alt="how-right-SVG.png" src="/images/welcome-right-svg.svg" />
//   </div>
// </div>
