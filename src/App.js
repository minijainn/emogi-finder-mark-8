import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  " ": "select some emogi",
  "😎": "cool",
  "😍": "in love",
  "😭": "cry baby",
  "💩": "oh shit",
  "🤯": "mind blown",
  "🥵": "you'r hot",
  "🤐": "negative",
  "🤑": "gold digger",
  "🤩": "my hero",
  "😚": "blushing"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "didn't match the checklist ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Oh boy!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> you are ...</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
