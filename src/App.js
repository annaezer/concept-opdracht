import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/subreddit/:subredditId' element={<Subreddit/>}/>
            </Routes>
            <footer>In opdracht van NOVI Hogeschool @2022</footer>
        </>
    );
}

export default App;
