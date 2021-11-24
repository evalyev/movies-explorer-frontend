import './Profile.css';
import React from 'react';

function Profile(props) {
  return (
    <section className="profile">
      <h1 className="profile__titile">Привет, Евгений!</h1>
      <form className="profile__form" name="profile">
        <label className="profile__input-text-label">
          <span className="profile__input-text-placeholder">Имя</span>
          <input className="profile__input-text" type="text" name="input-name" value="Евгений" />
        </label>
        <span className="profile__line"></span>
        <label className="profile__input-text-label">
          <span className="profile__input-text-placeholder">E-mail</span>
          <input className="profile__input-text" type="email" name="input-email" value="bak.evsha@gmail.com" />
        </label>
        <button className="profile__btn-edit">Редактировать</button>
      </form>
      <button className="profile__btn-exit">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;