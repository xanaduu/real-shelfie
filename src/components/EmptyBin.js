import React from 'react';
import {Link} from 'react-router-dom';

const EmptyBin = (props) => {

    return (
        <Link to={`/create/${props.id}`}>
            <div className="bin EmptyBin">
                <h2>+ Add inventory to bin</h2>
            </div>
        </Link>
    )

}

export default EmptyBin;
