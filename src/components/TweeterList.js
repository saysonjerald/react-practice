import React from 'react';
import Tweet from './Tweet';

const TweeterList = ({name, tweets, setTweets}) => {
    return (
    <div className="tweetList">
        {tweets.map((tweet) => (
            <Tweet name={name} tweets={tweets} tweet={tweet} setTweets={setTweets} key={tweet.id} />
        ))}
    </div>)
} 

export default TweeterList;
