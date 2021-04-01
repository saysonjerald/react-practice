import React from 'react';

//Imported component
import CreateTweet from './components/CreateTweet';
import TweeterList from './components/TweeterList';

function App() {

  const name = "Jerald Sayson";
  const message = "Hello there my baby, I'm just getting started!"

  return (
    <div className="App">
      <CreateTweet />
      <TweeterList name={name} message={message} />
    </div>
  );
}

export default App;
