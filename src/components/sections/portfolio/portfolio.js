import React from 'react';
import styles from './portfolio.module.css';

import img1 from '../../../images/1.png';
import img2 from '../../../images/2.png';
import img3 from '../../../images/3.png';

{/* карточки */}
const cases = [
  {
    img: img1,
    title: 'ГК «МеталлПромИнжиниринг»',
    text: 'Задача: заменить устаревший ASP-сайт на современную многостраничную платформу с интеграцией 1С:УПП и личным кабинетом дилера.'
  },
  {
    img: img2,
    title: 'Финтех-проект «CredFlow»',
    text: 'Задача: запустить landing-платформу для привлечения инвестиций в P2P-кредитование с полным циклом KYC/AML.'
  },
  {
    img: img3,
    title: 'ПАО «Северо-Западный Банк»',
    text: 'Задача: вывести на рынок корпоративный портал для обслуживания 28 000 SME-клиентов с поддержкой ЭЦП.'
  }
];

const Portfolio = () => (
  <section id="cases" className={styles.portfolio}>
    <div className={styles.container}>
      <h2 className={styles.heading}>КЕЙСЫ</h2>

      <div className={styles.grid}>  {/* сетка */}
        {cases.map((c, i) => (
          <div className={styles.card} key={i}>   {/* фон карточки */}
            <img src={c.img} alt={c.title} className={styles.pic} />    {/* изображение*/}
            <h3 className={styles.cardTitle}>{c.title}</h3>     {/* заголовок */}
            <p className={styles.cardText}>{c.text}</p>       {/* текст */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;