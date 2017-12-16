import React, { Component } from 'react';
import MainHeader from './Headers/MainHeader';
import Shelves from './Shelves';

class Home extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <div className="Shelves-wrapper">
                    <Shelves labels={['A','B','C','D']}/>
                </div>
            </div>
        );
    }
}

export default Home;
