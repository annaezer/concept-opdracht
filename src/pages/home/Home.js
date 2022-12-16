import React, {useEffect, useState} from 'react';
import './Home.css';
import axios from 'axios';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const results = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(results);
                const fifteenPosts = results.data.data.children;
                setPosts(fifteenPosts);
                console.log(fifteenPosts);

            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

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
                    <img src={logo} alt='logo Reddit'/>
                    <h1>Reddit</h1>
                </div>
            </header>
            <main>
                <div className='inner-container'>
                    <h2>Hottest posts</h2>
                    <h4>on Reddit right now</h4>
                    {posts &&
                        <>
                            {posts.map((post) => {
                                return (
                                    <div className='flex-wrap'>
                                        <article className='article' key={post.data.id}>
                                            <h3><a href={post.data.url}>{post.data.title}</a></h3>
                                            <p><Link
                                                to={`/subreddit/${post.data.subreddit}`}>{post.data.subreddit_name_prefixed}</Link>
                                            </p>
                                            <div>
                                                <p>Comments: {post.data.num_comments}</p>
                                                <p>Ups: {post.data.ups}</p>
                                            </div>
                                        </article>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </main>
        </>
    );
}

export default Home;
