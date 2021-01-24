import React from 'react';

import styles from '../../scss/about.module.scss';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['about-contents-container']}>
        <div className={styles['about-heading-container']}>
          <img
            src="/images/about-elipse.png"
            className={styles['about-heading-image']}
            alt="Decorative"
          />
          <h1 className={styles['about-heading-text']}>About Us</h1>
        </div>

        <div className={styles['about-contents']}>
          <p className="mb-l">
            Elit lorem ea beatae at nisi Maiores laborum fugiat doloremque rerum
            fugit est Quia blanditiis debitis ipsam tenetur fugit Doloribus
            repellat vel delectus culpa accusamus! Eius quam harum unde corrupti
            nam nobis? In architecto dolor illo sed dolor odio, omnis
          </p>

          <p>
            Lorem explicabo nobis provident omnis reiciendis Illo dolor quasi
            deserunt exercitationem soluta. Ipsam error dignissimos dolorem
            vitae voluptates. Laboriosam aliquam molestias omnis ad illum Alias
            earum non repellat quod quae? Molestiae molestiae nihil dolores
            earum molestias Praesentium numquam iure dolor dolore est! Ea omnis
            officiis impedit quas soluta praesentium! Perferendis quas sed natus
            id placeat Voluptates cum nostrum optio ipsa esse itaque velit odit
            Tenetur ipsa temporibus unde quis doloremque. Debitis provident amet
            rerum pariatur unde dolorem tempora Consequatur sunt quam
            reprehenderit minus perspiciatis! Vel rerum suscipit aperiam quidem
            pariatur Dolore quaerat exercitationem maxime eum quibusdam odio aut
            consequatur. Maxime
          </p>
        </div>
      </div>
      <img src="/images/about-decor.png" alt="Decorative" className={styles["about-decoration"]} />
    </div>
  );
};

export default About;
