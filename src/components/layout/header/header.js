import React from 'react';
import styles from './header.module.css';
import logo from '../../../images/logo.svg';

const Header = () => {
    const menu = [
        { label: 'О НАС',     id: 'about' },
        { label: 'КЕЙСЫ',     id: 'cases' },
        { label: 'УСЛУГИ',    id: 'services' },
        { label: 'КАЛЬКУЛЯТОР', id: 'calc' },
        { label: 'ВОПРОСЫ',       id: 'form' },
        { label: 'КОНТАКТЫ',  id: 'contacts' }
    ];

    return (
        <header className={styles.header}>
        <div className={styles.container}>
            <img src={logo} alt="Логотип" className={styles.logo} />

            <nav className={styles.nav}>
                {menu.map(item => (
                <a key={item.id} href={`#${item.id}`} className={styles.link}> {item.label} </a>
            ))}
            </nav>

            <button className={styles.cta}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
        </header>
    );
};

export default Header;