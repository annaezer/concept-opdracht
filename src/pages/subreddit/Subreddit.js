import React, {useEffect, useState} from 'react';
import './Subreddit.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import {IoIosArrowBack} from 'react-icons/io'

function Subreddit() {
    const {subredditId} = useParams();
    const [post, setPost] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchPost() {
            setLoading(true);

            try {
                setError(false);
                const results = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`, {signal: controller.signal});
                // console.log(results);
                setPost(results.data.data);
                console.log(post);
            } catch (e) {
                console.error(e);
                setError(true);
            }
            setLoading(false);
        }
        if (subredditId) {
            fetchPost();
        }
        // return function cleanup() {
        //     controller.abort();
        // }
    }, [subredditId]);

    return (
        <>
            {error && <p>Error: could not fetch data!</p>}
            {loading && <p>Loading...</p>}

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
                        <p className='link-to-home'><Link to='/'> <IoIosArrowBack/> Take me back</Link></p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Subreddit;
