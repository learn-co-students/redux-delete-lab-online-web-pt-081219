import React from 'react';
import Band from './Band';

const Bands = props => {
    const bands = props.bands.map(b => <Band key={b.id} band={b} delete={props.delete}/>)

    return (
        <div>
            <ul>
                {bands}
            </ul>
        </div>
    )
}

export default Bands;