function Form({
  setFilterText,
  setFilterHouse,
  filterText = "",
  filterHouse = "",
  setFilterGender,
  filterGender = "",
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputFilter = (ev) => {
    setFilterText(ev.target.value);
  };

  const handleHouseFilter = (ev) => {
    setFilterHouse(ev.target.value);
  };

  const handleGenderFilter = (ev) => {
    setFilterGender(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="characterInput"
        type="text"
        name="filter"
        id="filter"
        placeholder="Find your character..."
        value={filterText}
        onInput={handleInputFilter}
      />
      <select
        className="houseSelect"
        name="house"
        id="house"
        value={filterHouse}
        onChange={handleHouseFilter}
      >
        <option value="">🪄 All 🪄</option>
        <option value="Gryffindor">🦁 Gryffindor 🦁</option>
        <option value="Hufflepuff">🦡 Hufflepuff 🦡</option>
        <option value="Ravenclaw">🦅 Ravenclaw 🦅</option>
        <option value="Slytherin">🐍 Slytherin 🐍</option>
      </select>
      <select
        className="genderSelect"
        name="gender"
        id="gender"
        value={filterGender}
        onChange={handleGenderFilter}
      >
        <option value="">🧙‍♀️ All 🧙🏻‍♂️</option>
        <option value="female">🧙‍♀️ Female 🧙‍♀️</option>
        <option value="male">🧙🏻‍♂️ Male 🧙🏻‍♂️</option>
      </select>
    </form>
  );
}

export default Form;
