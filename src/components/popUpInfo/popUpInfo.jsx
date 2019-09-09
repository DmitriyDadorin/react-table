import React, { PureComponent } from 'react';
import Button from '../button/button';
import './popUpInfo.css';

class PopUpInfo extends PureComponent {

  render() {
    const { info } = this.props;
    return (
      <div className="info">
        <div className="info__text">
          <span>{`Адрес`}</span>
          <span>{`Город: ${info[0].address.city}`}</span>
          <span>{`Штат: ${info[0].address.state}`}</span>
          <span>{`Улица: ${info[0].address.streetAddress}`}</span>
          <span>{`Индекс: ${info[0].address.zip}`}</span>
          <span className="info__desck" >{`Описание: ${info[0].description}`}</span>
        </div>
        <Button onClick={this.props.onClick} text={'Закрыть'} />
      </div>
    );
  }
}

export default PopUpInfo;
