import React from 'react';
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <div>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <p>Sorry, an error has occured, Requested page not found!</p>
            <Link className="btn" to="/">Take Me Home</Link>
        </div>
    );
}

export default Page404;