import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/")
        }, 3000);

        return function cleanup() {
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <h1>Page not found | 404</h1>
            <p>You will be redirected in 3 sec.</p>
        </>
    );
}

export default PageNotFound;
