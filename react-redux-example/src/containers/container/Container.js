import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../../actions';

import SomeComponent from '../../components/component/SomeComponent';

// react "container"

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arr: ['a', 'b', 'c']
    }
  }

  componentWillMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        <SomeComponent data={this.props.api} />
      </div>
    )
  }
}

// redux connection

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {
    api: state.api_data.payload
  };
};

export default connect(mapStateToProps, actions)(Container);
