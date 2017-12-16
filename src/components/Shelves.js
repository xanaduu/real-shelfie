import React from 'react';
import {Link} from 'react-router-dom';

const Shelves = props => {
    return props.labels.map((label,i) => {
        return (
            <div className="Shelves" key={i}>
                <Link to={`/bins/${label}`}>
                    <h2>Shelf {label}</h2>
                </Link>
            </div>
        )
    })
}


export default Shelves;
