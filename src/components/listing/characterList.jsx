import CharacterCard from "./characterCard.jsx";

function CharacterList({
  allCharacters = [],
  filterText = "",
  hasFilter = false,
}) {
  if (
    (!Array.isArray(allCharacters) || allCharacters.length === 0) &&
    hasFilter
  ) {
    return <p className="noResults">Character not found with {filterText}</p>;
  }

  if (!Array.isArray(allCharacters) || allCharacters.length === 0) {
    return null;
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
