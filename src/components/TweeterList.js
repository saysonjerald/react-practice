import React from 'react';
import Tweet from './Tweet';

const TweeterList = ({name, message}) => {
    return (
    <div className="tweetList">
        <Tweet name={name} message={message}/>
        <Tweet name={name} message={message}/>
        <Tweet name={name} message={message}/>
        <Tweet name={name} message={message}/>
        <Tweet name={name} message={message}/>
    </div>)
} 

export default TweeterList;
