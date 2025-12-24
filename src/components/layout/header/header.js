import React, { useState } from 'react';
import styles from './header.module.css';
import logo from '../../../images/logo.svg';

const Header = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: 'О НАС', id: 'about' },
    { label: 'КЕЙСЫ', id: 'cases' },
    { label: 'КАЛЬКУЛЯТОР', id: 'calc' },
    { label: 'ВОПРОСЫ', id: 'form' },
    { label: 'КОНТАКТЫ', id: 'contacts' }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Логотип" className={styles.logo} />     {/* логотип */}

        {/* десктопное меню */}
        <nav className={styles.navDesk}>
          {menu.map(item => (
            <a key={item.id} href={`#${item.id}`} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* гамбургер (только 375 px) */}
        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`${styles.line} ${open ? styles.cross1 : ''}`} />
          <span className={`${styles.line} ${open ? styles.cross2 : ''}`} />
          <span className={`${styles.line} ${open ? styles.cross3 : ''}`} />
        </button>

        {/* мобильное меню */}
        <div className={`${styles.navMob} ${open ? styles.open : ''}`}>
          {menu.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.mobLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* кнопка «ОСТАВИТЬ ЗАЯВКУ» (скрыта на 375 px) */}
        <button className={styles.cta} onClick={() => document.getElementById('order').scrollIntoView({ behavior: 'smooth' })}>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </header>
  );
};

export default Header;