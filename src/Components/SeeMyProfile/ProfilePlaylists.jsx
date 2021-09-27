import PlaylistCard from "./PlaylistCard";

const ProfilePlaylists = ({
  playlistsInf,
  handleShowPlaylist,
  showPlaylist,
  handleDeletePost,
  handleDeletePostFromPlay,
  handleDeleteAll,
  handleDeletePlaylist,
}) => {
  return (
    <>
      <div id="profilePlaylists-cards">
        <div className="profilePlaylist-card-container">
          {playlistsInf.length === 0 ? (
            <h1 className="noPost-h1">No tienes playlists</h1>
          ) : (
            playlistsInf.map((el) => (
              <PlaylistCard
                key={el._id}
                playlist={el}
                handleShowPlaylist={handleShowPlaylist}
                showPlaylist={showPlaylist}
                handleDeletePost={handleDeletePost}
                handleDeletePostFromPlay={handleDeletePostFromPlay}
                handleDeleteAll={handleDeleteAll}
                handleDeletePlaylist={handleDeletePlaylist}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePlaylists;
