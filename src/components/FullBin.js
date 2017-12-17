import React from 'react';
import {Link} from 'react-router-dom';

const FullBin = props => {

    return (
        <Link to={`/bin/${props.id}`}>
            <div className="bin">
                <h2>Bin {props.bin}</h2>
                {/* {props.product}
                {props.price} */}
            </div>
        </Link>
    )

}

export default FullBin;
