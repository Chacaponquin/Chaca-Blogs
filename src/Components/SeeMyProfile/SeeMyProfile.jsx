import { useEffect, useReducer } from "react";
import { getPlaylists, getPosts } from "../../actions/dispatchActions";
import { initialStates } from "../../js/initialStates";
import { profileInfReducer } from "../../actions/profileReducer";
import "../../css/styleProfileInf.css";
import { useSeeMyProfile } from "../../hooks/useSeeMyProfile";
import NavBarLoged from "../NavBars/NavBarLoged";
import MyProfileHeader from "./MyProfileHeader";
import ProfilePlaylists from "./ProfilePlaylists";
import ProfilePosts from "./ProfilePosts";
import Loading from "../Loading/Loading";
import { TYPES } from "../../actions/TYPES";

const SeeMyProfile = () => {
  const {
    API,
    isMount,
    loading,
    activeProfile,
    sectionActive,
    showPlaylist,
    setLoading,
    setSectionOpen,
    ChangeSection,
    handleShowPlaylist,
    handleDeletePost,
    handleDeletePostFromPlay,
    handleDeleteAll,
    handleDeletePlaylist,
  } = useSeeMyProfile();

  //REDUCER QUE CONTIENE LOS POSTS Y LAS PLAYLISTS
  const [profileInf, dispatch] = useReducer(
    profileInfReducer,
    initialStates.initialReducer
  );

  const getInformation = () => {
    setLoading(true);
    Promise.all([
      getPosts(API, activeProfile.posts),
      getPlaylists(API, activeProfile._id),
    ])
      .then((values) => {
        setSectionOpen("Profile");
        dispatch({ type: TYPES.SET_POSTS, payload: values[0] });
        dispatch({ type: TYPES.SET_PLAYLISTS, payload: values[1] });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInformation();

    return () => (isMount.current = false);
  }, [activeProfile]);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div id="seeMyProfile-container">
          <NavBarLoged />
          <div id="profileInf-container">
            <MyProfileHeader
              activeProfile={activeProfile}
              ChangeSection={ChangeSection}
            />
            {sectionActive === "Posts" && (
              <ProfilePosts
                postsInf={profileInf.posts}
                handleDeletePost={handleDeletePost}
              />
            )}
            {sectionActive === "Playlists" && (
              <ProfilePlaylists
                showPlaylist={showPlaylist}
                playlistsInf={profileInf.playlists}
                handleShowPlaylist={handleShowPlaylist}
                handleDeletePost={handleDeletePost}
                handleDeletePostFromPlay={handleDeletePostFromPlay}
                handleDeleteAll={handleDeleteAll}
                handleDeletePlaylist={handleDeletePlaylist}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SeeMyProfile;
