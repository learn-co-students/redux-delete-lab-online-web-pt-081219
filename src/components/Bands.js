import React, { Component } from 'react';
import Band from './Band';

const Bands = props => {

  const bands = props.bands.map(band => <Band delete={props.delete} key={band.id} name={band.name}/>)
    return (
        <div>{ bands }</div>   
    )
}    

export default Bands;
