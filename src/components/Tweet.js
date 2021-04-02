import React from 'react';

const Tweet = ({name, tweets, tweet, setTweets}) => {

    const deleteTweetHandler = (e) => {
        setTweets(tweets.filter(item => item.id !== tweet.id));
    }

    return (
        <div className="tweet">
            <h4>{name}</h4>
            <blockquote>{tweet.message}</blockquote>
            <p></p>
            {/* If function has a parameter, make sure to make it as a 'callback' lest it would be triggered when reloading or updaing the page */}
            <button>Like</button>
            <button onClick={deleteTweetHandler}>Delete</button>
        </div>
    );
}

export default Tweet;