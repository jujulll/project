import React, { useState } from 'react';
import styles from './form.module.css';

const Form = () => {
    const [status, setStatus] = useState('idle'); // статус отправки

    const handleSubmit = (e) => {
      // если поля не валидны – браузер покажет подсказки и остановит отправку
      if (!e.currentTarget.checkValidity()) return;
        e.preventDefault();          // отменяем перезагрузку ТОЛЬКО после успешной валидации
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1200);
    };

    return (
      <section id="form" className={styles.form1}>
        <div className={styles.box}>
          <div className={styles.left}>
            <h2 className={styles.title}>ОСТАЛИСЬ ВОПРОСЫ? <span className={styles.greny}> НАПИШИТЕ НАМ</span></h2>
            <p className={styles.text}>
              Задайте свой вопрос и мы пришлем ответ на почту в течение 12 часов.
            </p>
          </div>
          {/* форма */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.label}>Имя и Фамилия</label>
              <input
                type="text"
                name="name"
                placeholder="Иван Иванов"
                required
                maxLength="70"
              />
            </div>

            <div className={styles.row}>
              <label className={styles.label}>Почта</label>
              {/* базовая HTML5-проверка */}
              <input
                type="email"
                name="email"
                placeholder="Email@mail.ru"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Пример: user@site.ru"
              />
            </div>

            <div className={styles.row}>
              <label className={styles.label}>Задайте вопрос</label>
              <textarea
                name="question"
                placeholder="Ваш вопрос..."
                required
                maxLength="250"
                rows="4"
              />
            </div>

            <label className={styles.check}>
              <input type="checkbox" required />
              <span>Я согласен на обработку моих персональных данных в соответствии 
                с Условиями договора оферты и Политикой обработки персональных данных</span>
            </label>

            <button
              type="submit"
              className={styles.btn}
              disabled={status === 'loading'}
            >
              {status === 'success' ? 'УСПЕШНО ОТПРАВЛЕНО' : 'ОТПРАВИТЬ ВОПРОС'}
            </button>
          </form>
        </div>
      </section>
    );
};

export default Form;