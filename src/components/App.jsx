import { useState, useEffect } from "react";
import "../styles/App.scss";

import Header from "./layout/Header";
import CharacterList from "./listing/characterList";
import Footer from "./layout/Footer";
import Form from "./listing/form";

function App() {
  // -------------------------variables de estado ----------------------------------
  const [allCharacters, setAllCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterHouse, setFilterHouse] = useState("");

  // ---------------------------------fetch--------------------------------------
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setAllCharacters(data);
      });
  }, []);

  // ----------------------------filtro de personajes------------------------------
  const filteredCharacters = allCharacters.filter((eachCharacter) => {
    const matchesName = eachCharacter.name.toLowerCase().includes(filterText);

    const matchesHouse =
      filterHouse === "" || eachCharacter.house === filterHouse;
    return matchesName && matchesHouse;
  });

  return (
    <div>
      <Header />
      <main className="main">
        <Form setFilterText={setFilterText} setFilterHouse={setFilterHouse} />
        <CharacterList allCharacters={filteredCharacters} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
