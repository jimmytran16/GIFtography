import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import ImageGif from '../ImageGif/ImageGif';
import CopyLink from '../CopyLink/CopyLink';
import configs from '../../configs/config'; 
import './Gifs.css';

function Gifs() {
    // states
    const [resultlist, setResultList] = useState([]);
    const [msg, setMsg] = useState("");

    // reference variable for the search query
    const searchRef = useRef(null);

    // func called when clicking on the 'clear' button
    function clearButton() {
        clearResult();
        searchRef.current.value = null;
    }

    function clearResult() {
        setResultList([]);
    }

    function clearMsg(){
        setMsg("");
    }

    // function to search the gifs 
    function searchResult() {
        // clear the resultList
        clearResult();
        clearMsg();

        // get the search query by getting the reference
        const query = searchRef.current.value;
        const api_key = configs.api_key;
        const url = 'https://api.giphy.com/v1/gifs/search?q='+query+'&api_key='+api_key+'&limit=9';

        // call the API endpoint to get back results
        axios.get(url)
            .then(result => {
                let savedArray = []
                // iterate through the array and populate it inside the savedArray
                result.data.data.map(item => {
                    savedArray.push(item);
                })
                // check if the array is empty, then there was no results returned back!
                if( savedArray.length === 0 ) {
                    setMsg("No Search Results!");
                    return;
                }
                // set the state of the resultList to the savedArray with all of the gif objects            
                setResultList(savedArray);
                console.log(resultlist);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="search-container">
                <input type='text' ref={searchRef} placeholder="Search the Gif" />
                <button onClick={searchResult} className="btn btn-success">Search</button>
                <button onClick={clearButton} className="btn btn-danger">Clear</button>
            </div>
            <div className="row">
                {
                    resultlist.map(item => {
                        return (
                            <div className="col-md-4">
                                {/* Gif image Component */}
                                <ImageGif url={item.images.original.url} />
                                {/* Copy Link Component */}
                                <CopyLink link={item.images.original.url} />
                            </div>
                        
                        )
                    })
                }
            </div>
            <span style={{ color: 'red' }}>{msg}</span>
        </>
    )
}

export default Gifs