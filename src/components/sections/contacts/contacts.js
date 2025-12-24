import React from 'react';
import s from './contacts.module.css';
import IconBehance  from '../../../images/behance.svg';
import IconLinkedIn from '../../../images/link.svg';
import IconTelegram from '../../../images/tg.svg';

const Contacts = () => (
  <section id='contacts' className={s.contacts}>
    <div className={s.container}>
      <h2 className={s.title}>КОНТАКТЫ</h2>

      <div className={s.columns}>
        <div className={s.col1}>
          <p>Телефон:</p>
          <p>Email:</p>
          <p>Адрес:</p>
        </div>

        <div className={s.col2}>
          <p>+7 (908) 650-94-95</p>
          <p>7site@gmail.com</p>
          <p>г. Москва, ул. Студенческая д. 5</p>
        </div>
      </div>

      <div className={s.socials}>
        <a href="https://behance.net"   target="_blank" rel="noreferrer"><img src={IconBehance}  alt="Behance" /></a>
        <a href="https://linkedin.com"  target="_blank" rel="noreferrer"><img src={IconLinkedIn} alt="LinkedIn" /></a>
        <a href="https://t.me"          target="_blank" rel="noreferrer"><img src={IconTelegram} alt="Telegram" /></a>
      </div>
    </div>
  </section>
);

export default Contacts;