import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/table';
import Table from '../table/table';
import Header from '../header/header';
import Pagination from '../pagination/pagination';
import './main.css';

class Main extends PureComponent {

  componentDidMount() {
    this.props.getSmallDataTable();
  }

  render() {
    const data = this.props.data.table.data;
    this.props.data.table.data ? console.log(this.props.data.table.data) : console.log('wait')

    return (
      <div className="main">
        <Header />
        {data && <Table data={data} />}
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = (data) => ({
  data
});

export default connect(
  mapStateToProps,
  { ...actions },
)(Main);