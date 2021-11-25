import './Login.css';
import { Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react/cjs/react.development';

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <span className="auth__input-text-placeholder">E-mail</span>
          <input className="auth__input-text" type="email" name="input-email" value={email} onChange={changeEmail} />
        </label>
        <span className="auth__line"></span>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Пароль</span>
          <input className="auth__input-text" type="password" name="input-password" value={password} onChange={changePassword} />
          <span className="auth__input-text-error">Что-то пошло не так...</span>
        </label>
        <button className="auth__btn-reg">Войти</button>
      </form>

      <div className="auth__bottom">
        <span className="auth__question">Ещё не зарегистрированы?</span>
        <Link className="auth__link" to="/signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;