function CharacterCard({ eachCharacter }) {
  return (
    <>
      <img
        src={eachCharacter.image === "" ? "https://placehold.co/210x295/ffffff/666666/?format=svg&text=Harry+Potter" : eachCharacter.image}
        alt={"Una foto de " + eachCharacter.name}
      />
      <p>{eachCharacter.name}</p>
      <p>{eachCharacter.species}</p>
    </>
  );
}

export default CharacterCard;
