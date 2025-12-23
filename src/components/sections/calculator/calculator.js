import React, { useState } from 'react';
import styles from './calculator.module.css';

// картинки импортируем отдельно
import imgLanding  from '../../../images/rocket.svg';
import imgCorporate from '../../../images/building.svg';
import imgShop      from '../../../images/shop.svg';

// цены
const BASE = [
  { id: 'landing',  name: 'Landing Page',  price: 29000, img: imgLanding },
  { id: 'corporate',name: 'Корпоративный', price: 59000, img: imgCorporate},
  { id: 'ecommerce',name: 'E-Commerce',    price: 89000, img: imgShop },
];

const OPTIONS = {
  design:   { title: 'Продающий копирайтинг',      price: 8000,  sub: 'Напишем тексты, которые продают' },
  form:     { title: 'WOW-анимация',  price: 12000, sub: 'Эффекты рлявдения, параллакс' },
  direct:   { title: 'Настройка Яндекс.Директ',price: 15000, sub: 'Запуск реклабы под "Ключ"' },
  telegram: { title: 'Интеграция Telegram/CRM',price: 5000,  sub: 'Мгновенные уведомления' },
};

const Calc = () => {
  const [project, setProject] = useState('landing');
  const [opts, setOpts] = useState({
    design: false,
    form: false,
    direct: false,
    telegram: false,
  });

  const total =
    BASE.find((p) => p.id === project).price +
    Object.keys(opts).reduce((s, k) => s + (opts[k] ? OPTIONS[k].price : 0), 0);

  const toggleOpt = (k) => setOpts((o) => ({ ...o, [k]: !o[k] }));

  return (
    <section id="calc" className={styles.calc}>
      <div className={styles.container}>
        <h2 className={styles.heading}><span className={styles.gren}>ПОНРАВИЛОСЬ?</span> <span className={styles.whit}>РАСЧИТАЙТЕ СТОИМОСТЬ</span></h2>

        <div className={styles.body}>
          {/* ---------- левая колонка ---------- */}
          <div className={styles.left}>
            {/* Тип проекта (картинка сверху) */}
            <div className={styles.group}>
              <h3 className={styles.subtitle}>1. Тип проекта</h3>
              <div className={styles.radioGrid}>
                {BASE.map((b) => (
                  <label
                    key={b.id}
                    className={`${styles.picCard} ${
                      project === b.id ? styles.active : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="project"
                      value={b.id}
                      checked={project === b.id}
                      onChange={() => setProject(b.id)}
                    />
                    <img src={b.img} alt={b.name} className={styles.pic} />
                    <span className={styles.picName}>{b.name}</span>
                    <span className={styles.picPrice}>от {b.price.toLocaleString()} ₽</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Доп. услуги – 1 строка: чек-Название-Цена-Sub */}
            <div className={styles.group}>
              <h3 className={styles.subtitle}>2. Дополнительные опции</h3>
              <div className={styles.optionRows}>
                {Object.keys(OPTIONS).map((k) => (
                  <label
                    key={k}
                    className={`${styles.lineRow} ${opts[k] ? styles.active : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={opts[k]}
                      onChange={() => toggleOpt(k)}
                    />
                    <span className={styles.customCheck} />
                    <span className={styles.lineTitle}>{OPTIONS[k].title}</span>
                    {OPTIONS[k].price > 0 && (
                      <span className={styles.linePrice}>+{OPTIONS[k].price.toLocaleString()} ₽</span>
                    )}
                    <span className={styles.lineSub}>{OPTIONS[k].sub}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ---------- правая колонка ---------- */}
          <div className={styles.right}>
            <div className={styles.totalBox}>
              <div className={styles.totalLabel}>Итого:</div>
              <div className={styles.totalAmount}>{total.toLocaleString()} ₽</div>

              <ul className={styles.list}>
                <li>Анализ конкурентов</li>
                <li>Продающая структура</li>
                {opts.design && <li>Уникальный дизайн</li>}
                {opts.form && <li>Настройка форм заявок</li>}
                {opts.direct && <li>Настройка Яндекс.Директ</li>}
                {opts.telegram && <li>Интеграция Telegram/CRM</li>}
              </ul>

              <button className={styles.orderBtn}>ЗАКАЗАТЬ РАЗРАБОТКУ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calc;