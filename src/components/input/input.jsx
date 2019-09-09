import React, { PureComponent } from 'react';
import './input.css';

class Input extends PureComponent {
  render() {
    return (
      <input className="input" onChange={this.props.onChange} type="text" placeholder="Поиск" />
    );
  }
}

export default Input;
