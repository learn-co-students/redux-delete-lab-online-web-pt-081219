import React, { Component } from 'react';
import Band from './Band';
import { connect } from 'react-redux';

class Bands extends Component {

    render() {
        return (
            <div>
                {
                    this.props.bands.map((band, idx) => <Band key={idx} band={band} deleteBand={this.props.deleteBand}/>)
                }
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    deleteBand: id => dispatch({ type: "DELETE_BAND", id: id })
})

export default connect(null, mapDispatchToProps)(Bands)