import { useParams, Link } from "react-router";

function CharacterDetailPage({ findCharacter }) {
  const { id } = useParams();

  const foundCharacter = findCharacter(id);

  if (foundCharacter === undefined) {
    return (
      <>
        <p className="notFound">Character not found</p>
        <Link className="returnLink" to="/">
          Return to character list
        </Link>
      </>
    );
  }

  const details = [
    {
      label: "Alternate name",
      value:
        foundCharacter.alternate_names?.length > 0
          ? foundCharacter.alternate_names.join(", ")
          : "None",
    },
    { label: "Species", value: foundCharacter.species || "Unknown" },
    { label: "Gender", value: foundCharacter.gender || "Unknown" },
    { label: "House", value: foundCharacter.house || "Unknown" },
    { label: "Alive", value: String(foundCharacter.alive) },
  ];

  console.log(foundCharacter);
  

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
          <ul className="characterDetailsList">
            {details.map((detail) => (
              <li key={detail.label} className="characterDetailItem">
                <span className="detailLabel">{detail.label}:</span>{" "}
                <span className="detailValue">{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link className="returnLink" to="/">
        Return to character list
      </Link>
    </section>
  );
}
export default CharacterDetailPage;
