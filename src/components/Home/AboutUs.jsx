import React from 'react';

import styles from '../../scss/home.module.scss';

export default function AboutUs() {
  return (
    <div id="about" className={styles['about-us-container']}>
      <div className={styles['about-us-heading-container']}>
        <div className={styles['about-us-heading-image']}>
          <img src="/images/home/about-heading.svg" alt="Decorative" />
        </div>
        <h1 className={styles['about-us-heading-text']}>About CodeTrophs</h1>
      </div>
      <div className={styles['about-us-text']}>
        <p>
          Does the idea of open source excite you but not sure where to begin or
          which project to choose? Often feel confused and uncomfortable while
          using GitHub, and can’t think of any available alternative? Well, you
          have arrived at the correct place &#34; CodeTrophs &#34; is an open
          source platform targeted solely for beginners to help them contribute
          to real life projects, from developing new ideas and approaches, to
          exploring the world of open sourcing. &#34;
        </p>
        <img className={styles["about-us-text-vertical"]} src="/images/home/about-vertical.svg" alt="about_vertical" />
        <div className={styles['icon-bar']}>
        <a href="https://www.facebook.com/codetrophs" className={styles.facebook}><i aria-label="facebook" className="fa fa-facebook"/></a> 
        <a href="https://github.com/CodeTrophs" className={styles.github}><i aria-label="github" className="fa fa-github"/></a> 
        <a href="https://discord.gg/urV8vGk" className={styles.discord}><i aria-label="discord" className="fab fa-discord"/></a> 
        <a href="https://www.linkedin.com/company/codetrophs/" className={styles.linkedin}><i aria-label="linkedin" className="fa fa-linkedin"/></a>
       
      </div>
      </div>
    </div>
  );
}
