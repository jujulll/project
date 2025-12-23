import React from 'react';
import styles from './plan.module.css';

// картинки-иконки (можно заменить свои)
import img1 from '../../../images/01.svg';
import img2 from '../../../images/02.svg';
import img3 from '../../../images/03.svg';
import img4 from '../../../images/04.svg';

const steps = [
  { id: 1, title: 'ЗАЯВКА', text: 'Обсуждаем задачу, цели и бюджет проекта', img: img1 },
  { id: 2, title: 'ПРОТОТИП', text: 'Создаем структуру и логику будущего сайта', img: img2 },
  { id: 3, title: 'ДИЗАЙН', text: 'Рисуем уникальный макет в Figma', img: img3 },
  { id: 4, title: 'РАЗРАБОТКА', text: 'Верстаем, программируем и запускаем', img: img4 },
];

const WorkStep = ({ id, title, text, img }) => (
  <div className={styles.step}>
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepText}>{text}</p>
    </div>
    <img src={img} alt={`${id}`} className={styles.stepIcon} />
  </div>
);

const Plan = () => (
  <section id="work" className={styles.work}>
    <div className={styles.container}>
      <h2 className={styles.heading}>КАК МЫ РАБОТАЕМ</h2>

      <div className={styles.grid}>
        {steps.map((s) => (
          <WorkStep key={s.id} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default Plan;