import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({tweets, setTweets}) => {
    const [textInput, setTextInput] = useState("");
    
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {message: textInput, id: uuidv4()}]);
        setTextInput("");
    }
    
    return(
        <form onSubmit={submitTweetHandler}>
            <textarea onChange={userInputHandler} value={textInput} name="tweet" id="tweet" cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>
    )
}

export default CreateTweet;