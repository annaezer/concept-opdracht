import React from 'react';
import {useNavigate} from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    setTimeout(()=>{
        navigate("/")
    }, 5000);

    return (
        <>
            <h1>Page not found | 404</h1>
            <p>You will be redirected in 5 sec.</p>
        </>
    );
}

export default PageNotFound;
