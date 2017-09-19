
















//
// example of class based component with <input /> which sets the component state
//
import React, { Component } from "react";

class SearchBar extends Component {

  // getting props from React.Component, so always call super(props)
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          // how to set State in one line and from "render", which is normally being forbidden
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
