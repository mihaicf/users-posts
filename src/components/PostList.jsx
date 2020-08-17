import React from 'react';
import PostItem from './PostItem'

class PostList extends React.Component{
    render() {
        const posts = this.props.posts;

        return(
            <div className="post-list">
                {
                    posts.map((post, index) => {
                        return(
                            <PostItem
                                url={post.url}
                                title={post.title}
                                body={post.body}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default PostList;