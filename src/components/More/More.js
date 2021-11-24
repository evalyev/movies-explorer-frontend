import './More.css';
import React from 'react';

function More(props) {

  return (
    <section className="more">
      <button className="more__btn" onClick={props.handleClick}>Ещё</button>
    </section>
  );
}

export default More;