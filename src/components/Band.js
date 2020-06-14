import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      
      <div>
        <span><li>{this.props.band.name}</li></span>
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>X</button>
      </div>
    );
  }
};

export default Band;
