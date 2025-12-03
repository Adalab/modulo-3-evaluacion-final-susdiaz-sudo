import { useParams, Link } from "react-router";

function CharacterDetailPage({ findCharacter }) {
  const { name } = useParams();
  const foundCharacter = findCharacter(name);

  if (foundCharacter === undefined) {
    return (
      <>
        <p className="notFound">Character not found</p>
        <Link to="/">Return to character list</Link>
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
            <strong>Alternate name:</strong> {foundCharacter.alternate_names}
          </p>
          <p>
            <strong>Species:</strong> {foundCharacter.species}
          </p>
          <p>
            <strong>Gender:</strong> {foundCharacter.gender}
          </p>
          <p>
            <strong>House:</strong> {foundCharacter.house}
          </p>
          <p>
            <strong>Alive:</strong> {String(foundCharacter.alive)}
          </p>
        </div>
      </div>
    </section>
  );
}
export default CharacterDetailPage;
