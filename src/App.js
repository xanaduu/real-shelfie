import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Shelves from './components/Shelves';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="Shelves-wrapper">
                    <Shelves labels={['A','B','C','D']}/>
                </div>
            </div>
        );
    }
}

export default App;
