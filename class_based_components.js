
















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

  onInputChange(term) {
    this.setState({ term });

    // passed function as a prop from parent
    this.props.onSearchTermChange(term);
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
}

export default SearchBar;
