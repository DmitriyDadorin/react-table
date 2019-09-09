import React, { PureComponent } from 'react';
import './row.css';

export default class Row extends PureComponent {

  getRowTable = () => {
    const data = this.props.data;
    const rowTable = data.map((item, i) => {
      return (
        <tr className="tr" id={i} key={i}>
          <td className="td" id={i}>{item.id}</td>
          <td className="td" id={i}>{item.firstName}</td>
          <td className="td" id={i}>{item.lastName}</td>
          <td className="td" id={i}>{item.email}</td>
          <td className="td" id={i}>{item.phone}</td>
        </tr>
      )
    })
    return rowTable;
  }

  render() {
    return (
      this.getRowTable()
    )
  }
}

