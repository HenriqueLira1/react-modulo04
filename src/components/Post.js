import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Post({ data }) {
    return (
        <div className="post">
            <div className="post-data">
                <div className="post-header">
                    <div className="profile-picture">
                        <img src={data.author.avatar} alt="" />
                    </div>
                    <div className="post-author">
                        <h3>{data.author.name}</h3>
                        <p className="date">{data.date}</p>
                    </div>
                </div>
                <div className="post-content">
                    <p>{data.content}</p>
                </div>
            </div>
            <hr />
            <div className="comments">
                {data.comments.map(comment => (
                    <Comment key={comment.id} data={comment} />
                ))}
            </div>
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.object
};

export default Post;
