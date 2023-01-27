import React from 'react';
import './App.css';
import { useState } from 'react';

const emojiDictionary = {
  "😊": "smilling",
  "😔": "sad",
  "❤️": "loving",
  "😡": "angry",
  "😴": "sleepy",
  "🤤": "hungry",
  "😇": "blessed",
  "😭": "laughing",
  "🤯": "brusting",
  "😳": "blushing"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
    const [meaning ,setMeaning] = useState("");
    
    function emojiInputHandler(event){
      var userInput = event.target.value;

      var meaning= emojiDictionary[userInput]
      if(meaning === undefined){
        meaning = "we don't have this is our database"
      }

      setMeaning(meaning);
    }


    function emojiClickHandler(emoji){
      var meaning= emojiDictionary[emoji]
      setMeaning(meaning);
    }

  return (
    //view
    <div className="App">
        <div className='heading'>
       <h1>EmoTAG👇🏻</h1>
       </div>
       <div className='input-text'>  
        <input placeholder="put any emoji to see it's meaning"onChange= {emojiInputHandler} />
        </div>
        <div className='mean'> 
          <h2>✨🫶🏻👻{meaning}👻🫶🏻✨</h2>
        </div>
        <div className='emoji'>
        <h3>emojies we know</h3>
        {emojisWeKnow.map(function(emoji){
          return (
          <span
          onClick={() => emojiClickHandler(emoji)}
          key={emoji}>
            {emoji}
            </span>
            );
         })};
         </div>
    </div>
  );
}

