import React, {useState} from 'react';

//Imported component
import CreateTweet from './components/CreateTweet';
import TweeterList from './components/TweeterList';

function App() {

  const name = "Jerald Sayson";
  const message = "Hello there my baby, I'm just getting started!"

  //You can also pass the State like Props did on other components.
  //State acts like a getters and setter in my opinion.
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <CreateTweet />
      <TweeterList like={like} setLike={setLike} name={name} message={message} />
    </div>
  );
}

export default App;
