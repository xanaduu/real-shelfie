import React from 'react';
import {Link} from 'react-router-dom';

const FullBin = props => {

    return (
        <Link to={`/bin/${props.id}`} params={{name:props.product, price:props.price}}>
            <div className="bin">
                <h2>Bin {props.bin}</h2>
            </div>
        </Link>
    )

}

export default FullBin;
