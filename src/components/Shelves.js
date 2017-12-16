import React from 'react';

const Shelves = props => {
    return props.labels.map((label,i) => {
        return (
            <div className="Shelves" key={i}>
                <h2>Shelf {label}</h2>
            </div>
        )
    })
}


export default Shelves;
