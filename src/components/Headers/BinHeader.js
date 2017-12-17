import React from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';

const BinHeader = (props) => {
    return (
        <div className="BinHeader header">
            <Link to="/">
                <div className="headerLogo">
                    <img src={logo} alt="logo" />
                </div>
            </Link>
            <div className="headerShelf">
                <span>Shelf {props.id[0]}</span>
            </div>
            <div className="headerBin">
                <span>Add to Bin {props.id[1]}</span>
            </div>
        </div>
    )
}

export default BinHeader;
