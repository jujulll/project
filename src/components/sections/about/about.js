import React from 'react';
import styles from './about.module.css';
import photo from '../../../images/people.png';

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.outer}>        {/* общий прямоугольник */}
      <div className={styles.textBox}>
        <h2 className={styles.title}>О НАС</h2>
        <p className={styles.desc}>
          7Site — инженерная компания полного цикла, специализирующаяся на разработке высокоскоростных корпоративных сайтов и веб-сервисов.<br/> 
          <br/>
          С 2016 года мы поставили в продакшн 1 240 проектов
          для компаний из 18 отраслей: от производственных холдингов до финтех-стартапов. <br/>
          <br/>
          В штате 32 сертифицированных специалиста: 14 backend-инженеров, 10 frontend-разработчиков, 4 системных архитектора, 3 инженера по безопасности, 1 DevOps-лид. 
        </p>
      </div>

      <div className={styles.imgBox}>
        <img src={photo} alt="Команда" className={styles.photo} /> {/* фото */}
      </div>
    </div>
  </section>
);

export default About;