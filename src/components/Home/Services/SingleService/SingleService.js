import React from 'react';
import './SingleService.css'

const SingleService = (props) => {
    const {image, heading, description}= props.singleService
    console.log(props);
    return (
        <div className='single-item'>
            <img src={image} alt=""/>
            <h5>{heading}</h5> 
            <p>{description}</p> 
        </div>
    );
};

export default SingleService;