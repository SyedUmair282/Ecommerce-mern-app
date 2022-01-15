import React from 'react'
import '../components/header.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Homescreen from './homescreen';

function mainscreen() {
    return (
        <div className="App">
            <Header/>
            <Homescreen/>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default mainscreen;
