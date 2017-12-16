import React from 'react';
import logo from './logo.png';

const ShelfHeader = (props) => {
    return (
        <div className="ShelfHeader header">
            <div className="headerLogo">
                <img src={logo} alt="logo" />
            </div>
            <div className="shelf">
                Shelf {props.label}
            </div>
        </div>
    )
}

export default ShelfHeader;
