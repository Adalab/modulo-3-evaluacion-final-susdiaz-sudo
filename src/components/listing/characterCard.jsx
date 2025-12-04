import { Link } from "react-router";

function CharacterCard({ eachCharacter }) {
  return (
    <>
      <Link to={"/characterDetail/" + eachCharacter.id}>
        <img
          src={
            eachCharacter.image === ""
              ? "https://placehold.co/210x295/ffffff/666666/?format=svg&text=" +
                eachCharacter.name
              : eachCharacter.image
          }
          alt={"Una foto de " + eachCharacter.name}
        />
        <span className="statusIcon">{eachCharacter.alive ? "👤" : "☠️"}</span>
        <span className="houseIcon">
          {eachCharacter.house === "Gryffindor"
            ? "🦁"
            : eachCharacter.house === "Hufflepuff"
            ? "🦡"
            : eachCharacter.house === "Ravenclaw"
            ? "🦅"
            : eachCharacter.house === "Slytherin"
            ? "🐍"
            : ""
            }
        </span>
        <p>{eachCharacter.name}</p>
        <p>{eachCharacter.species}</p>
      </Link>
    </>
  );
}

export default CharacterCard;
