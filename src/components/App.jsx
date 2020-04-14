import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx"
import notes from "../notes.js";

console.log(notes);

function App() {
  return (
    <div>
      <Header />
      {notes.map(card => (
        <Note 
          key={card.key}
          title={card.title}
          content={card.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
