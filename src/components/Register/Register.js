import './Register.css';
import { Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loggedIn = React.useContext(LoggedInContext);

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister(name, email, password)
      .then(res => {
        if (res) {
          setName("");
          setEmail("");
          setPassword("");
        }
      })
  }

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
    <>
    {!loggedIn ? (
      <section className="auth">
      <form className="auth__form" name="auth" onSubmit={handleSubmit}>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Имя</span>
          <input className="auth__input-text" type="name" name="input-name" value={name} onChange={changeName} pattern="[A-Za-zА-Яа-я\-\s]{1,}" required />
        </label>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">E-mail</span>
          <input className="auth__input-text" type="email" name="input-email" value={email} onChange={changeEmail} required />
        </label>
        <span className="auth__line"></span>
        <label className="auth__input-text-label">
          <span className="auth__input-text-placeholder">Пароль</span>
          <input className="auth__input-text" type="password" name="input-password" value={password} onChange={changePassword} required />
          {/* <span className="auth__input-text-error">Что-то пошло не так...</span> */}
        </label>
        <button className="auth__btn-reg" type="submit">Зарегистрироваться</button>
      </form>

      <div className="auth__bottom">
        <span className="auth__question">Уже зарегистрированы?</span>
        <Link className="auth__link" to="/signin">Войти</Link>
      </div>
    </section>
    ) : 
    <Navigate to="/movies" />
    }
    </>
    
  );
}

export default Register;