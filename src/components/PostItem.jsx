import React from 'react';

export function PostItem(props) {
    const {url, title, body} = props;
    return(
        <div className="post-item">
            <img src={url} alt="post"/>
            <p><strong>{title}</strong></p>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;