import { useState, useEffect } from "react";
import "../styles/App.scss";

import Header from "./layout/Header";
import CharacterList from "./listing/characterList";
import Footer from "./layout/Footer";

function App() {
  // -------------------------variables de estado ----------------------------------
  const [allCharacters, setAllCharacters] = useState([]);

  // ---------------------------------fetch--------------------------------------
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setAllCharacters(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <CharacterList allCharacters={allCharacters} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
