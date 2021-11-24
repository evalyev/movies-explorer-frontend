import './Register.css';
import { Link, Route, Routes } from "react-router-dom";
import React from 'react';

function Register(props) {
  return (
    <section className="auth">
      <form className="auth__form" name="auth">
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Имя</span>
          <input className="auth__input-text" type="name" name="input-name" value="Евгений" />
        </label>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">E-mail</span>
          <input className="auth__input-text" type="email" name="input-email" value="bak.evsha@gmail.com" />
        </label>
        <span className="auth__line"></span>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Пароль</span>
          <input className="auth__input-text auth__input-text_type_error" type="password" name="input-password" value="asdasdasda" />
          <span className="auth__input-text-error">Что-то пошло не так...</span>
        </label>
        <button className="auth__btn-reg">Зарегистрироваться</button>
      </form>

      <div className="auth__bottom">
        <span className="auth__question">Уже зарегистрированы?</span>
        <Link className="auth__link" to="/signin">Войти</Link>
      </div>
    </section>
  );
}

export default Register;