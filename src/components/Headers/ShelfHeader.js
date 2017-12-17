import React from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';

const ShelfHeader = (props) => {
    return (
        <div className="ShelfHeader header">
            <Link to="/">
                <div className="headerLogo">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className="shelf">
                Shelf {props.label}
            </div>
        </div>
    )
}

export default ShelfHeader;
