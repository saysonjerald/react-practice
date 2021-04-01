import React from 'react';
import Tweet from './Tweet';

const TweeterList = ({name, message, like, setLike}) => {
    return (
    <div className="tweetList">
        <Tweet like={like} setLike={setLike} name={name} message={message}/>
        <Tweet like={like} setLike={setLike} name={name} message={message}/>
        <Tweet like={like} setLike={setLike} name={name} message={message}/>
        <Tweet like={like} setLike={setLike} name={name} message={message}/>
        <Tweet like={like} setLike={setLike} name={name} message={message}/>
    </div>)
} 

export default TweeterList;
