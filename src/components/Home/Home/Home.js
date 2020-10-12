import React from 'react';
import Brands from '../Brands/Brands';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';


const Home = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <div className= 'container' >
                <Header></Header>
                <Brands></Brands>
                <Services></Services>
                
            </div>
            <Works></Works>
        </div>
            
            
    );
};

export default Home;