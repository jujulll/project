import React, { useState } from 'react';
import styles from './order.module.css';

{/* выпадающий список */}
const SITE_TYPES = [
  { value: '', label: 'Ничего не выбрано' },
  { value: 'landing', label: 'Landing Page' },
  { value: 'corporate', label: 'Корпоративный сайт' },
  { value: 'shop', label: 'Интернет-магазин' },
  { value: 'other', label: 'Другое' },
];

const Order = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    siteType: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // статус отправки

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setErrors((e) => ({ ...e, [name]: '' }));
  };
  {/* валидация js */}
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Укажите имя и фамилию';
    if (!form.phone.trim()) e.phone = 'Укажите телефон';
    if (!/^\+?\d{10,15}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Неверный формат телефона';
    if (!form.email.trim()) e.email = 'Укажите e-mail';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Неверный e-mail';
    if (!form.siteType) e.siteType = 'Выберите тип сайта';
    if (!form.agree) e.agree = 'Необходимо согласие';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="order" className={styles.order}>
      <div className={styles.box}>
        {/* левая колонка */}
        <div className={styles.left}>
          <h2 className={styles.title}>ЗАКАЗАТЬ РАЗРАБОТКУ САЙТА</h2>
          <p className={styles.text}>
            Подайте заявку и мы свзяжемся с вами в ближайшее время для обсуждения деталей. 
          </p>
        </div>

        {/* форма */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <label className={styles.label}>Имя и Фамилия</label>
            <input
              type="text"
              name="name"
              placeholder="Иван Иванов"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? styles.error : ''}
            />
            {errors.name && <span className={styles.err}>{errors.name}</span>}
          </div>

          <div className={styles.row}>
            <label className={styles.label}>Телефон</label>
            <input
              type="tel"
              name="phone"
              placeholder="+7 (000) 000-00-00"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? styles.error : ''}
            />
            {errors.phone && <span className={styles.err}>{errors.phone}</span>}
          </div>

          <div className={styles.row}>
            <label className={styles.label}>Почта</label>
            <input type="email" name="email" placeholder="Email@mail.ru" value={form.email} onChange={handleChange}
              className={errors.email ? styles.error : ''}
            />
            {errors.email && <span className={styles.err}>{errors.email}</span>}
          </div>

          <div className={styles.row}>
            <label className={styles.label}>Выберите тип сайта:</label>
            <div className={styles.selectWrap}>
                <select
                    name="siteType"
                    value={form.siteType}
                    onChange={handleChange}
                    className={errors.siteType ? styles.error : ''}
                    >
                    {SITE_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>
                        {t.label}
                        </option>
                    ))}
                </select>
            <span className={styles.selectArrow} />
            </div>
            {errors.siteType && <span className={styles.err}>{errors.siteType}</span>}
          </div>

          <label className={styles.check}>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>Я согласен на обработку моих персональных данных в соответствии 
              с Условиями договора оферты и Политикой обработки персональных данных</span>
          </label>
          {errors.agree && <span className={styles.Checkerr}>{errors.agree}</span>}

          <button
            type="submit"
            className={styles.btn}
            disabled={status === 'loading'}
          >
            {status === 'success' ? 'УСПЕШНО ОТПРАВЛЕНО' : 'ОТПРАВИТЬ ЗАЯВКУ'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Order;