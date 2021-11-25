import './Register.css';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <section className="auth">
      <form className="auth__form" name="auth">
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Имя</span>
          <input className="auth__input-text" type="name" name="input-name" value={name} onChange={changeName} />
        </label>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">E-mail</span>
          <input className="auth__input-text" type="email" name="input-email" value={email} onChange={changeEmail} />
        </label>
        <span className="auth__line"></span>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Пароль</span>
          <input className="auth__input-text auth__input-text_type_error" type="password" name="input-password" value={password} onChange={changePassword} />
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