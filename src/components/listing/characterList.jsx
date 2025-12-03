import CharacterCard from "./characterCard.jsx";

function CharacterList({ allCharacters = [] }) {
  if (!Array.isArray(allCharacters) || allCharacters.length === 0) {
    return <p className="noResults">Character not found</p>;
  }

  return (
    <ul className="characterList">
      {allCharacters.map((eachCharacter, index) => (
        <li key={eachCharacter.id ?? index} className="character">
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
