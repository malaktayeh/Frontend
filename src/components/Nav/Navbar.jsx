import React from 'react';

import styles from '../../scss/navbar.module.scss';
import Burger from './Burger';

const Navbar = () => {
  return (
    <div className={styles.stylenavbar}>
      <div className={styles.logo}>
      <img className= {styles['header-logo']} src="/logo/codetrophs.png" alt="" />
      </div>
      <Burger />
    </div>
  )
}

export default Navbar
