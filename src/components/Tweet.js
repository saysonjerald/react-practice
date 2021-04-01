import React from 'react';

const Tweet = ({name, message, like, setLike}) => {
const LikeHandler = (name) => {
    setLike(like + 1);
}

    return (
        <div className="tweet">
            <h4>{name}</h4>
            <blockquote>{message}</blockquote>
            <p>{like}</p>
            {/* If function has a parameter, make sure to make it as a 'callback' lest it would be triggered when reloading or updaing the page */}
            <button onClick={()=> LikeHandler(name)}>Like</button>
        </div>
    );
}

export default Tweet;