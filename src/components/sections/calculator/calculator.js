import React, { useState } from 'react';
import styles from './calculator.module.css';
import imgLanding  from '../../../images/rocket.svg';
import imgCorporate from '../../../images/building.svg';
import imgShop      from '../../../images/shop.svg';

{/* данные тип проекта */}
const BASE = [
  { id: 'landing',  name: 'Landing Page',  price: 29000, img: imgLanding },
  { id: 'corporate',name: 'Корпоративный', price: 59000, img: imgCorporate},
  { id: 'ecommerce',name: 'E-Commerce',    price: 89000, img: imgShop },
];

{/* данные доп опции */}
const OPTIONS = {
  design:   { title: 'Продающий копирайтинг',      price: 8000,  sub: 'Напишем тексты, которые продают' },
  form:     { title: 'WOW-анимация',  price: 12000, sub: 'Эффекты рлявдения, параллакс' },
  direct:   { title: 'Настройка Яндекс.Директ',price: 15000, sub: 'Запуск реклабы под "Ключ"' },
  telegram: { title: 'Интеграция Telegram/CRM',price: 5000,  sub: 'Мгновенные уведомления' },
};

{/* калькудятор */}
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
          {/* левая колонка */}
          <div className={styles.left}>
            {/* 1. Тип проекта */}
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

            {/* 2. Доп.  */}
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

          {/* правая колонка */}
          <div className={styles.right}>
            {/* ВАША СМЕТА */}
            <div className={styles.totalBox}>
              <h3 className={styles.totalTitle}>ВАША СМЕТА</h3>
              <p className={styles.totalSub}>Детализация стоимости</p>
              <div className={styles.divider} />

              {/* выбранный радио-бокс */}
              <div className={styles.radioLine}>
                <span className={styles.lineTitle}>{BASE.find(p => p.id === project)?.name}</span>
                <span className={styles.linePrice}>{BASE.find(p => p.id === project)?.price.toLocaleString()} ₽</span>
              </div>

              {/* «В базу входит» */}
              <p className={styles.includesTitle}>В базу входит:</p>
              <ul className={styles.checkList}>
                <li>Анализ конкурентов</li>
                <li>Продающая структура</li>
                <li>Уникальный дизайн</li>
                <li>Адаптивная верстка</li>
                <li>Настройка форм заявок</li>
                <li>Домен в подарок</li>
              </ul>

              {/* Доп опции */}
              {Object.keys(opts).filter(k => opts[k]).length > 0 && (
                <>
                  <div className={styles.dashedDivider} />
                  <p className={styles.optsTitle}>Дополнительные услуги</p>
                  <ul className={styles.optList}>
                    {Object.keys(opts)
                      .filter(k => opts[k])
                      .map(k => (
                        <li key={k}>
                          <span className={styles.optName}>{OPTIONS[k].title}</span>
                          <span className={styles.optPrice}>{OPTIONS[k].price.toLocaleString()} ₽</span>
                        </li>
                      ))}
                  </ul>
                </>
              )}

              {/* ИТОГО */}
              <div className={styles.dashedDivider} />
              <div className={styles.totalLine}>
                <span className={styles.totalLabel}>ИТОГО:</span>
                <span className={styles.totalAmount}>{total.toLocaleString()} ₽</span>
              </div>

              {/* кнопка + мелкий текст */}
              <button className={styles.orderBtn} onClick={() => document.getElementById('order').scrollIntoView({ behavior: 'smooth' })}>ЗАКАЗАТЬ РАЗРАБОТКУ</button>
              <p className={styles.smallPrint}>*Финальная стоимость фиксируется в договоре</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calc;