import React from 'react';
import './ImageGif.css';


export default function ImageGif(props) {
    return (
        <img className="img-gif" width="300px" src={props.url} />
    )
}