import React, {useEffect, useState} from 'react';
import './Subreddit.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";

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
            <Header>
                <h1 className='title'>{post.display_name_prefixed}</h1>
                <h4 className='sub-title'>Subreddit specifications</h4>
            </Header>
            <main className='outer-container'>
                <div className='inner-subreddit'>
                    <div>
                        <h3 className='space'>Title</h3>
                        <p>{post.title}</p>
                    </div>
                    <div>
                        <h3 className='space'>Description</h3>
                        <p>{post.public_description}</p>
                    </div>
                    <div>
                        <h3 className='space'>Number of subscribers</h3>
                        <p>{post.subscribers}</p>
                    </div>
                    <div className='more-space'>
                        <p className='link-to-home'><Link to='/'>Take me back</Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Subreddit;
