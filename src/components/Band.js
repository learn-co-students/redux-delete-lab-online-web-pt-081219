import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <React.Fragment>
        <li>
          {this.props.band.name}
          <button onClick={() => this.props.delete(this.props.band.id)}>X</button>
        </li>
      </React.Fragment>
    );
  }
};

export default Band;
