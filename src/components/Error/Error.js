import './Error.css';
import { Link, useNavigate } from "react-router-dom";
import React from 'react';

function Error(props) {
  const navigate = useNavigate();

  return (
    <section className="error">
      <div className="error__info">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Страница не найдена</p>
        <Link className="error__link" to={() => navigate.goBack()}>Назад</Link>
      </div>
    </section>
  );
}

export default Error;