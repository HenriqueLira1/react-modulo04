import React from 'react';
import Proptypes from 'prop-types';

function Comment({ data }) {
    return (
        <div className="comment">
            <div className="profile-picture">
                <img src={data.author.avatar} alt="" />
            </div>
            <div className="comment-text">
                <strong>{data.author.name}</strong> {data.content}
            </div>
        </div>
    );
}

Comment.propTypes = {
    data: Proptypes.object
};

export default Comment;
