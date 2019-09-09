import React from 'react';
import './button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.text}
    </button>
  );
}

export default Button;
