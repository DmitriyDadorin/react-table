import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/table';
import Button from '../button/button';
import Input from '../input/input';
import PopUpInfo from '../popUpInfo/popUpInfo';
import './header.css';

class Header extends PureComponent {

  state = { search: [] }

  updateInputValue = (evt) => {
    this.props.getSearch(evt.target.value);
    this.setState({ search: evt.target.value })
    console.log(this.state.search)
  }

  render() {
    const { search } = this.state;
    return (
      <div className="header" >
        <div className="header__button">
          <Button
            text='smallData'
            onClick={this.props.getSmallDataTable}
          />
          <Button
            text='bigData'
            onClick={this.props.getBigDataTable}
          />
        </div>
        <div className="header__search">
          <Input onChange={this.updateInputValue} />
          <Button
            text='Найти'
            onClick={() => this.props.onClick(search)}
          />
          {this.props.info && <PopUpInfo info={this.props.info} />}
        </div>
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
)(Header);
