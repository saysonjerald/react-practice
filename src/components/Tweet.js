import React from 'react';

const Tweet = ({name, message}) => {

const DeleteHandler = () => {
    console.log('You are clicking it! just keep it goin');
}

const LikeHandler = (name) => {
    console.log(`${name} hit's the like button`);
}

    return (
        <div className="tweet">
            <h4>{name}</h4>
            <blockquote>{message}</blockquote>
            <button onClick={DeleteHandler}>Delete</button>
            {/* make sure to make it as a 'callback' lest it would be triggered when reloading or updaing the page */}
            <button onClick={()=> LikeHandler(name)}>Like</button>
        </div>
    );
}

export default Tweet;