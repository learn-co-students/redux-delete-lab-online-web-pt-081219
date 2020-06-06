import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <h4>Bands</h4>
        {this.props.bands.map(b => <Band key={b.id} id={b.id} name={b.name} delete={this.props.deleteBand}/>)}
      </div>
    )
  }
}