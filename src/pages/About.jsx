import React from 'react';
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h2>ReactJS - Users & Posts from API, Add & Remove Users from List</h2>
            <Link className="btn" to="/">Take Me Home</Link>
        </div>
    );
}

export default About;