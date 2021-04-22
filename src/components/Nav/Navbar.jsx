import React from 'react';
import Link from 'next/link';

import styles from '../../scss/navbar.module.scss';
import Burger from './Burger';

const Navbar = () => {
  return (
    <div className={styles.stylenavbar}>
      <Link href='/feed'>
        <a>
          <div className={styles.logo}>
            <img className= {styles['header-logo']} src="/logo/codetrophs.png" alt="" />
          </div>
        </a>
      </Link>
      <Burger />
    </div>
  )
}

export default Navbar
