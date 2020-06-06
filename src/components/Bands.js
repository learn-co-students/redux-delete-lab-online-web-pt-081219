import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <div>
          {this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} name ={band.name} id={band.id}/>)}
      </div>
    );
  }
};

export default Bands;