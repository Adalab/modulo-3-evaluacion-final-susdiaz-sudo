import { useParams, Link } from "react-router";

function CharacterDetailPage({ findCharacter }) {
  const { name } = useParams();

  const foundCharacter = findCharacter(name);

  if (foundCharacter === undefined) {
    return (
      <>
        <p className="notFound">Character not found</p>
        <Link to="/characterList">Return to character list</Link>
      </>
    );
  }

  return (
    <section className="characterDetail">
      <h2 className="characterDetailName">{foundCharacter.name}</h2>

      <div className="characterDetailContent">
        <div className="characterDetailImageWrap">
          <img
            className="characterDetailImage"
            src={
              foundCharacter.image === ""
                ? "https://placehold.co/210x295/ffffff/666666/?format=svg&text=" +
                  foundCharacter.name
                : foundCharacter.image
            }
            alt={"Foto de " + foundCharacter.name}
          />
        </div>

        <div className="characterDetailInfo">
          <p> 
            Alternate name: 
            {foundCharacter.alternate_names?.length > 0
              ? foundCharacter.alternate_names
              : "None"}
          </p>
          <p>Species: {foundCharacter.species}</p>
          <p>Gender: {foundCharacter.gender}</p>
          <p>House: {foundCharacter.house}</p>
          <p>Alive: {String(foundCharacter.alive)}</p>
        </div>
      </div>
      <Link className="returnLink" to="/">
        Return to character list
      </Link>
    </section>
  );
}
export default CharacterDetailPage;
