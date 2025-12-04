import CharacterCard from "./characterCard.jsx";

function CharacterList({ allCharacters = [], filterText = "" }) {
  if (!Array.isArray(allCharacters) || allCharacters.length === 0) {
    return <p className="noResults">Character not found with {filterText}</p>;
  }

  return (
    <ul className="characterList">
      {allCharacters.map((eachCharacter) => (
        <li key={eachCharacter.id} className="character">
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
