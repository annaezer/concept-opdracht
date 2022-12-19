import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/subreddit/:subredditId' element={<Subreddit/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            <footer>In opdracht van NOVI Hogeschool @2022</footer>
        </>
    );
}

export default App;
