import React, {useState} from 'react';

const CreateTweet = () => {
    const [textInput, setTextInput] = useState("");
    
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    
    return(
        <form action="#">
            <textarea onChange={userInputHandler} value={textInput} name="tweet" id="tweet" cols="50" rows="5"></textarea>
            <button>Submit</button>
            <h1>{textInput}</h1>
        </form>
    )
}

export default CreateTweet;