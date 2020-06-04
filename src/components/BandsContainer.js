import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';

import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.delete} log={console.log(band)} /> )

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {console.log(this.props.bands)}
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({type: "DELETE_BAND", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
