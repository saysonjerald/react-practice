import React from 'react';

const Tweet = ({name, message}) => {
    return (
        <div className="tweet">
            <h4>{name}</h4>
            <blockquote>{message}</blockquote>
            <button>Delete</button>
            <button>Like</button>
        </div>
    );
}

export default Tweet;