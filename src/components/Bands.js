import React, { Component } from 'react'
import Band from './Band'
import { connect } from 'react-redux'

    
class Bands extends Component {

    renderBands = () => {
        return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} band={band}/> )
    }

    render(){
        return (
            <div>
                {this.renderBands()}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        bands: state.bands
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBand: id => dispatch({type: 'DELETE_BAND', id})
    }
}

        

export default connect(mapStateToProps, mapDispatchToProps)(Bands)