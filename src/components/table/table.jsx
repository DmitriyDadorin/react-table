import React, { PureComponent, Fragment } from 'react';
import Row from '../row/row';
import Header from '../../components/header/header';
import './table.css';

export default class Table extends PureComponent {

  state = {
    persons: [],
    compare: false,
    result: null,
    close: true,
  }

  componentDidMount() {
    this.setState({ persons: this.props.data });
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ persons: this.props.data });
    }
  }

  search = (serchElem) => {
    const { persons } = this.state;
    const person = persons.filter((item) => {
      return item.firstName.indexOf(serchElem) > -1
    })
    this.setState({ persons: person });
    if (serchElem.length === 0) {
      this.setState({ persons: this.props.data });
    }
  }

  compareBy = (key) => {
    if (!this.state.compare) {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      };
    }
    if (this.state.compare) {
      return function (a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    };
  };

  sortBy = (key) => {
    let sort = [...this.state.persons];
    sort.sort(this.compareBy(key));
    this.setState({ persons: sort });
    this.setState((state) => {
      return {
        compare: !state.compare
      };
    });
  };

  getSortTable = (e) => {
    const key = e.target.id;
    this.sortBy(key);
  }

  getInfoList = (val) => {
    const { persons } = this.state;
    const id = val.target.id;
    const result = persons.filter((item, i) => {
      if (+id === i) {
        return item;
      }
      return null;
    })
    this.setState({ result: result, close: true });
  }

  onClose = () => {
    const { close } = this.state;
    this.setState({ close: !close })
  }

  render() {
    return (
      <Fragment>
        <Header
          onClick={this.search}
          info={this.state.result}
          closes={this.state.close}
          clickForm={this.onClose}
        />
        <table className="table">
          <thead onClick={this.getSortTable}>
            <tr>
              <th id="id" className="table__th">id<div className="arrow-top"></div></th>
              <th id="firstName" className="table__th">Имя<div className="arrow-top"></div></th>
              <th id="lastName" className="table__th">Фамилия<div className="arrow-top"></div></th>
              <th id="email" className="table__th">email<div className="arrow-top"></div></th>
              <th id="phone" className="table__th">Телефон<div className="arrow-top"></div></th>
            </tr>
          </thead>
          <tbody onClick={this.getInfoList}>
            <Row data={this.state.persons} />
          </tbody>
        </table>
      </Fragment>
    )
  }
}
