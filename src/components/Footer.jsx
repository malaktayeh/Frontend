import Link from 'next/link';
import React from 'react';

import styles from '../scss/footer.module.scss';

export default function Footer() {
  return (
    // ===========================================================================================
    //                   Footer Links
    //     ===========================================================================================
    <footer className={styles.footer}>
      {/* Quick links  */}
      <div className={styles['footer-list']}>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href="#welcome">Get Started</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#help">Help US</a>
            </li>
          </ul>
        </div>

        {/* <img src='/essential_SVG/footer_base.svg' alt='codetrophs' /> */}

        {/* Contact us */}
        <div className={styles.contact}>
          <ul>
            <li>
              <i
                className="fa fa-phone"
                aria-hidden="true"
                style={{ fontSize: '20px', color: 'white' }}
              />
              <a href="tel:+919876543223">+919876543223</a>
            </li>
            <li>
              <i
                className="fa fa-envelope"
                aria-hidden="true"
                style={{ fontSize: '20px', color: 'white' }}
              />
              <a href="mailto:codetrophs@gmail.com"> codetrophs@gmail.com</a>
            </li>
            <li>
              <i
                className="fa fa-map-marker"
                aria-hidden="true"
                style={{ fontSize: '20px', color: 'white' }}
              />
              <span> Palam, Delhi</span>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          {/* <a href="https://discord.gg/HYPt5RX">
            <img src="/SVG/footer-discord.svg" alt="Discord" />
          </a>
          <a href="https://dev.to/_opensourcecode">
            <img src="/SVG/dev_to.svg" alt="Dev.to" />
          </a> */}
          <a href="https://twitter.com/_opensourcecode">
            <i
              className="fa fa-twitter-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white' }}
            />
          </a>

          <a href="https://github.com/OpenSouceCode">
            <i
              className="fa fa-github-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white' }}
            />
          </a>
          <a href="https://www.linkedin.com/company/opensourcecode">
            <i
              className="fa fa-linkedin-square"
              aria-hidden="true"
              style={{ fontSize: '36px', color: 'white' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

// <h1 className={styles.heading}>
//   {' '}
//   Contact Us
//   <hr/>
// </h1>
// <ul className={styles.badges}>
//   {/* Dev.to */}
//   <li>
//     <a href="https://dev.to/_opensourcecode">
//       <img src="/SVG/dev_to.svg" alt="Dev.to"/>
//       Dev.to
//     </a>
//   </li>
//   {/* Discord */}
//   <li>
//     <a href="https://discord.gg/HYPt5RX">
//       <img src="/SVG/footer-discord.svg" alt="Discord"/>
//       Discord
//     </a>
//   </li>
//   {/* Twitter */}
//   <li>
//     <a href="https://twitter.com/_opensourcecode">
//       <img src="/SVG/footer-twitter.svg" alt="Twitter"/>
//       Twitter
//     </a>
//   </li>
//   {/* Github */}
//   <li>
//     <a href="https://github.com/OpenSouceCode">
//       <img src="/SVG/footer-github.svg" alt="Github"/>
//       Github
//     </a>
//   </li>
//   {/* LinkedIn */}
//   <li>
//     <a href="https://www.linkedin.com/company/opensourcecode">
//       <img src="/SVG/footer-linkedin.svg" alt="LinkedIn"/>
//       LinkedIn
//     </a>
//   </li>
//   {/* Slack */}
//   <li>
//     <a href="https://join.slack.com/t/opensourcecode/shared_invite/zt-f0frpe9g-8fGLNGPA6HUQR~XuCoAJmg">
//       <img src="/SVG/footer-slack.svg" alt="Slack"/>
//       Slack
//     </a>
//   </li>

//   <li>
//     <a href="https://github.com/OpenSouceCode/Frontend/tree/master/src/components">
//       <img src="/SVG/pencil.svg" alt="pencil"/>
//       Edit this page
//     </a>
//   </li>
//   <li>
//     <a href="https://github.com/OpenSouceCode/Frontend">
//       <img src="/SVG/code.svg" alt="</>"/>
//       View Source Code
//     </a>
//   </li>
// </ul>
// <div className={styles['partner-logo']}>
//   <img src="/logo/logo.png" alt="Powered by CodeTrophs"/>
// </div>
