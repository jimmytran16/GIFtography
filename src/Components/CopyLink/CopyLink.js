import React , { useRef, useState } from 'react';
import './Copylink.css'

export default function CopyLink(props) {

    // states
    const[msg,setMsg] = useState("");
    const[theStyle,setStyle] = useState({})
    
    // function to copy the link to the clipboard
    const copyToClipBoard = () => {
        window.navigator.clipboard.writeText(props.link);
        setStyle({
            'backgroundColor':'rgb(88 136 88)'
        })
    }
    
    // return the contents
    return (
        <div style= {theStyle} value={props.link} className="copylink-container" onClick={copyToClipBoard}>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-link" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
            </svg>
        </div>
    )
}