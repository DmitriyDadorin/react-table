import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/table';
import Table from './components/table/table';
import Pagination from './components/pagination/pagination';
import Spinner from './components/spinner/spinner';
import './App.css';

class App extends PureComponent {

  componentDidMount() {
    this.props.getSmallDataTable();
  }

  getChunkTable = () => {
    const { data } = this.props.data.table;
    const { page } = this.props.data;
    let finPage = page * 50;
    let startPage = finPage - 50;
    if (data.length <= 50) {
      return data;
    }
    return data.slice(startPage, finPage);
  }

  render() {
    const { data } = this.props.data.table;
    const { page } = this.props.data;
    return (
      <div className="App">
        {(!data) && <Spinner />}
        {data && <Table
          data={this.getChunkTable()}
          search={this.props.search}
        />}
        {data && <Pagination
          onClick={(p) => this.props.getPageNumber(p)}
          data={data}
          page={page}
        />}
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
)(App);
