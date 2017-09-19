import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

import SomeComponent from '../../components/component/SomeComponent';

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: ['a', 'b', 'c']
    }
  }

  render() {
    return (
      <div>
        <SomeComponent data={this.state.arr} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(Container);
