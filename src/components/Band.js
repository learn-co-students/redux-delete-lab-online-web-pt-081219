import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = event =>{
    event.preventDefault()
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleOnClick}>Delete this shit</button>
      </div>
    );
  }
};

export default Band;
