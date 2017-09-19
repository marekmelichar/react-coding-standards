// Also can be called a "containers", or "smart" components
// are concerned about "how" things work
// don't have any DOM markup on their own, except some wrapping <div>
// never have any styles
// provide a data and behavior to presentational "components" or other "containers"
// call redux actions, receive redux state, provide functions (methods) to the presentational components
// often are stateful, as they tend to serve data sources







//
// example of "container" together in use with "component"
//

// "container"
import React, {Component} from "react";

export default class CommentListContainer extends Component {
  state = { comments: [] };
  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }
  render() {
    return <CommentList comments={this.state.comments} />;
  }
}

// "component" for that container
import React from "react";

const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>

export default CommentList;
