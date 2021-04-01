import React from 'react';

const CreateTweet = () => {
    return(
        <form action="#">
            <h1>What's on your mind?</h1>
            <textarea name="tweet" id="tweet" cols="50" rows="5"></textarea>
            <button>Submit</button>
        </form>
    )
}

export default CreateTweet;