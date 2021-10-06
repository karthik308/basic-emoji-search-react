import React, { useState } from "react";
import Header from "../src/components/Header";
import SearchInput from "../src/components/SearchInput";
import EmojiResults from "../src/components/EmojiResults";
import filterEmoji from "../src/filterEmoji";

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20));

  function handleSearchChange(event) {
    setFilteredEmoji(filterEmoji(event.target.value, 20));
  }

  return(
    <div>
      
        
        
        <Header />
      <SearchInput textChange={handleSearchChange}/>
      <EmojiResults emojiData={filteredEmoji}
      
      />
 
      <center>THANK YOU GUYS</center>
     
    </div>
  );
}

export default App;