import './AboutProject.css';
import React from 'react';

function AboutProject(props) {
  return (
    <section className="about">
      <h2 className="content__title">О проекте</h2>
      <div className="about__two-columns">
        <div className="about__column">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
            финальные доработки.</p>
        </div>
        <div className="about__column">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.</p>
        </div>
      </div>

      <div className="about__timeline">
        <div className="about__first-period">
          <span className="about__period about__period_type_first">1 неделя</span>
          <span className="about__period-name">Back-end</span>
        </div>
        <div className="about__second-period">
          <span className="about__period about__period_type_second">4 недели</span>
          <span className="about__period-name">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;