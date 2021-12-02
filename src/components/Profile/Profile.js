import './Profile.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isVisibleNotice, setIsVisibleNotice] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditProfile(name, email)
      .then(res => {
        setIsVisibleNotice(true);
        if(res) {
          setIsSuccess(true);
        }
        else {
          setIsSuccess(false);
        }
      })
    
  }

  function isEqualData() {
    return name === currentUser?.data.name && email === currentUser?.data.email;
  }

  function handleLogout() {
    props.onLogout()
      .then(res => {
        if (res) {
          setName("");
          setEmail("");
        }
      })
  }

  useEffect(() => {
    setName(currentUser?.data.name);
    setEmail(currentUser?.data.email);
  }, [currentUser])

  return (
    <section className="profile">
      <h1 className="profile__titile">{`Привет, ${currentUser?.data.name}!`}</h1>
      <form className="profile__form" name="profile" onSubmit={handleSubmit}>
        <label className="profile__input-text-label">
          <span className="profile__input-text-placeholder">Имя</span>
          <input className="profile__input-text" type="text" name="input-name" value={name} onChange={changeName} pattern="[A-Za-zА-Яа-я\-\s]{1,}" required />
        </label>
        <span className="profile__line"></span>
        <label className="profile__input-text-label">
          <span className="profile__input-text-placeholder">E-mail</span>
          <input className="profile__input-text" type="email" name="input-email" value={email} onChange={changeEmail} required />
        </label>
        {isVisibleNotice &&
          <span className={`profile__notice ${!isSuccess ? "profile__notice_type_error" : ""}`}>{isSuccess ? "Данные успешно сохранены" : "При обновлении профиля произошла ошибка"}</span>
        }
        
        <button className={`profile__btn-edit ${isEqualData() ? "profile__btn-edit_type_disabled" : ""}`} disabled={isEqualData() ? true : false}>Редактировать</button>
      </form>
      <button className="profile__btn-exit" onClick={handleLogout}>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;