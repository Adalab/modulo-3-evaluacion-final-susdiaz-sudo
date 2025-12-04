import { useState, useEffect } from "react";
import "../styles/App.scss";

import Header from "./layout/Header";
import CharacterList from "./listing/characterList";
import Footer from "./layout/Footer";
import Form from "./listing/form";
import CharacterDetailPage from "./pages/characterDetailPage";

import { Routes, Route } from "react-router";

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

  const findCharacter = (id) => {
    const foundCharacter = allCharacters.find(
      (eachCharacter) => eachCharacter.id === id
    );
    return foundCharacter;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <main className="main">
              <Form
                setFilterText={setFilterText}
                setFilterHouse={setFilterHouse}
                filterText={filterText}
                filterHouse={filterHouse}
              />
              <CharacterList
                allCharacters={filteredCharacters}
                filterText={filterText}
              />
            </main>
            <Footer />
          </div>
        }
      />
      <Route
        path="/characterList"
        element={<CharacterList allCharacters={filteredCharacters} />}
      />
      <Route
        path="/characterDetail/:id"
        element={<CharacterDetailPage findCharacter={findCharacter} />}
      />
    </Routes>
  );
}

export default App;
