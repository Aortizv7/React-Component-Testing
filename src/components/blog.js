import React, { Component } from 'react';

class Blog extends Component {
  // constructor(props) {
  //   super(props);
  // }
  uppercaseTitle() {
    return this.props.title.toUpperCase();
  }
  onlyIfWarning() {
    if (this.props.warning) {
      return (<div className="warning">{this.props.warning}</div>)
    }
    return null;
  }
  render() {
    return (
      <div>
        <h1>{this.uppercaseTitle()}</h1>
        <div>{this.props.blog}</div>
        {this.onlyIfWarning()}
      </div>
    )
  }
}

export default Blog;
