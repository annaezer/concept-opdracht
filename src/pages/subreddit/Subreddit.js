import React, {useEffect, useState} from 'react';
import './Subreddit.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    const {subredditId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {

        async function fetchPost() {
            try {
                const results = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                // console.log(results);
                setPost(results.data.data);
                console.log(post);
            } catch (e) {
                console.error(e);
            }
        }
if (subredditId) {
        fetchPost();
}
    }, [subredditId]);

    return (
        <>
            <header className='outer-container'>
                <div className='inner-container'>
                    <nav>
                        <ul className='nav-items'>
                            <li>Hottest posts</li>
                            <li>Reddit</li>
                            <li>Memes</li>
                        </ul>
                    </nav>
                    <h1>{post.display_name_prefixed}</h1>
                    <h4>Subreddit specifications</h4>
                </div>
            </header>
            <main>
                <div className='inner-container'>
                    <h3>Title</h3>
                    <p>{post.title}</p>
                    <h3>Description</h3>
                    <p>{post.public_description}</p>
                    <h3>Number of subscribers</h3>
                    <p>{post.subscribers}</p>
                    <div>
                        <p><Link to='/'>Take me back</Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Subreddit;
