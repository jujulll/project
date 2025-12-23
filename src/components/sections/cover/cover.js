import React from 'react';
import styles from './cover.module.css';
import bgPic from '../../../images/print.svg';   // ← своя картинка

const Cover = () => (
  <section className={styles.cover}>
    {/* центрированный контент */}
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className={styles.white}>Разработка сайтов</span>
        <br />
        <span className={styles.green}>под ключ</span>
      </h1>

      <p className={styles.text}>
        Закрываем полный цикл: UX-аудит, дизайн, вёрстка, интеграцию 1С/CRM, размещение на хостинге и базовую SEO-оптимизацию
      </p>

      <div className={styles.btnRow}>
        <button className={`${styles.btn} ${styles.btn1}`}>
          Оставить заявку
        </button>
        <button className={`${styles.btn} ${styles.btn2}`}>
          Получить расчет
        </button>
      </div>
    </div>
    {/* фоновая картинка */}
    <div className={styles.bgWrap}>
      <img src={bgPic} alt="" className={styles.bg} />
    </div>
  </section>
);

export default Cover;