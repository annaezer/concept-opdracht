import React from 'react';
import './Subreddit.css';
import {useParams} from "react-router-dom";

function Subreddit(props) {
    const {subredditId} = useParams();

    return (
        <div>
            <h1> Het id is {subredditId} </h1>
        </div>
    );
}

export default Subreddit;
