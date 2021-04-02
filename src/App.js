import React, {useState} from 'react';

//Imported component
import CreateTweet from './components/CreateTweet';
import TweeterList from './components/TweeterList';

function App() {

  const name = "Jerald Sayson";

  //You can also pass the State like Props did on other components.
  //State acts like a getters and setter in my opinion.
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <CreateTweet tweets={tweets} setTweets={setTweets} />
      <TweeterList name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;
