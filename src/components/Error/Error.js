import './Error.css';
import { Link } from "react-router-dom";
import React from 'react';

function Error(props) {

  return (
    <section className="error">
      <div className="error__info">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
        <Link className="error__link" to={() => props.navigate.goBack()}>Назад</Link>
      </div>
    </section>
  );
}

export default Error;