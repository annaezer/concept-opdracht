import React, {useEffect, useState} from 'react';
import './Home.css';
import axios from 'axios';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";

function Home() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            try {
                setError(false);
                const results = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(results);
                const fifteenPosts = results.data.data.children;
                setPosts(fifteenPosts);
                console.log(fifteenPosts);

            } catch (e) {
                console.error(e);
                setError(true);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <>
            {error && <p>Error: could not fetch data!</p>}
            {loading && <p>Loading...</p>}

            <Header>
                <img src={logo} alt='logo Reddit'/>
                <h1 className='business-name'>Reddit</h1>
            </Header>
            <main className='outer-container'>
                <div className='inner-container headings'>
                    <h2>Hottest posts</h2>
                    <h4>on Reddit right now</h4>
                    <div className='flex-wrap'>
                        {posts &&
                            <>
                                {posts.map((post) => {
                                    return (
                                        <article className='article' key={post.data.id}>
                                            <h3 className='article-title'><a href={post.data.url}>{post.data.title}</a>
                                            </h3>
                                            <div>
                                                <p className='subreddit-link'><Link
                                                    to={`/subreddit/${post.data.subreddit}`}>
                                                    {post.data.subreddit_name_prefixed}</Link></p>
                                                <p>Comments: {post.data.num_comments}</p>
                                                <p>Ups: {post.data.ups}</p>
                                            </div>
                                        </article>
                                    )
                                })}
                            </>
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
