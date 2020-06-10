import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map((band) => {
          return (
            <Band key={band.id} {...band} deleteBand={this.props.deleteBand} />
          );
        })}
      </div>
    );
  }
}

// const Bands = (props) => {
//   const bands = props.bands.map((band) => (
//     <Band key={band.id} {...band} deleteBand={props.deleteBand} />
//   ));

//   return <div>{bands}</div>;
// };

export default Bands;

// const bands = props.bands.map((band) => (
//   <Band key={band.id} {...band} deleteBand={props.deleteBand} />
// ));
