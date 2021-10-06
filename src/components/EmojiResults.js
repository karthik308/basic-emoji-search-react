import React, { useEffect } from "react";
import EmojiResultRow from "./EmojiResultRow";
import Clipboard from "clipboard";
import "./EmojiResult.css"

function EmojiResults(props) {

  useEffect(() => {
    let clipboard = new Clipboard(".copy-to-clipboard");

    return function cleanup() {
      clipboard.destroy();
    };
  });

  return (
    <div className="emoji-component">
        <div>
      {props.emojiData.map(emoji => {
        return (
          <EmojiResultRow 
            key={emoji.title}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        );
      })}
      </div>
    </div>
  );
}

export default EmojiResults;