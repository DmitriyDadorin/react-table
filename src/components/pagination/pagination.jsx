import React, { PureComponent } from 'react';
import './pagination.css';

export default class Pagination extends PureComponent {

  getPagination = () => {
    const { page, data } = this.props;
    const quantityPages = data.length / 50;
    let paginationBlock = [];
    for (let i = 1; i <= quantityPages; i++) {
      paginationBlock.push(i);
    }
    return paginationBlock.map((item, i) => {
      const selectButton = [];
      if ((i + 1) === +page) {
        selectButton.push('pagination__item-select');
      }
      return <button
        onClick={() => this.props.onClick(i + 1)}
        key={i}
        id={i + 1}
        className={`pagination__item ${selectButton.join(' ')}`}>
        {item}
      </button>
    })
  }

  render() {
    return (
      <div className="pagination">
        {this.getPagination()}
      </div>
    )
  }
}
