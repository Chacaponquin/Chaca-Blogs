import CategorySelect from "./CategorySelect";
import PlaylistSelect from "./PlaylistSelect";

const Selects = ({ showCards, handleSelect, categorys, playlists }) => {
  return (
    <>
      <div id="post-selects">
        <PlaylistSelect
          showCards={showCards}
          playlists={playlists}
          handleSelect={handleSelect}
        />
        <CategorySelect
          showCards={showCards}
          categorys={categorys}
          handleSelect={handleSelect}
        />
      </div>
    </>
  );
};

export default Selects;
