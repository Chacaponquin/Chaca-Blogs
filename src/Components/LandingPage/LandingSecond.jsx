import CreateCategory from "./CreateCategory";

const LandingSecond = ({ randomCategorys }) => {
  return (
    <>
      <div id="landingSecond">
        <div id="brown-circle"></div>
        <div id="pink-circle"></div>
        <div id="blue-circle"></div>
        <div id="green-circle"></div>
        <h1 id="second-text">¿Que vas a encontrar?</h1>
        <div id="landingSecond-content">
          <div id="second-content-image">
            <img id="foto1" src="../img/Random/4.jpg" alt="" />
            <img id="foto2" src="../img/Random/7.jpg" alt="" />
            <img id="foto3" src="../img/Random/9.jpg" alt="" />
          </div>
          <div id="second-content-list">
            {randomCategorys &&
              randomCategorys.map((el) => (
                <CreateCategory key={el._id} category={el} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSecond;
