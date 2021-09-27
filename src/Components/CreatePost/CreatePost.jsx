import React, { useContext, useEffect } from "react";
import ProfileContext from "../../context/ProfileContext";
import "../../css/styleCreateNotice.css";
import { useCreatePost } from "../../hooks/CreatePost/useCreatePost";
import { getCategories } from "../../js/getCategories.js";
import NavBarLoged from "../NavBars/NavBarLoged";
import ContentCard from "./ContentCard";
import NewButtons from "./NewButtons";
import Selects from "./Selects";
import TitleResume from "./TitleResume";
import { getPlaylist } from "../../js/getPlaylist.js";
import Loading from "../Loading/Loading";

const CreatePost = () => {
  const { activeProfile } = useContext(ProfileContext);

  const {
    API,
    isMount,
    loading,
    showCards,
    categorys,
    playlists,
    setLoading,
    setSectionOpen,
    setCategorys,
    setPlaylists,
    showHideCards,
    handleChange,
    handleNewCategory,
    handleSubmit,
    handleSelect,
    moverForm,
  } = useCreatePost();

  const getInformation = () => {
    setLoading(true);
    Promise.all([getCategories(API), getPlaylist(API, activeProfile._id)])
      .then((values) => {
        if (isMount.current === true) {
          setSectionOpen("");
          setCategorys(values[0]);
          setPlaylists(values[1]);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInformation();

    return () => (isMount.current = false);
  }, []);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div id="createContainer">
          <div id="create-color"></div>
          <img src="../img/Logos/4.jpg" alt="" id="create-background-image" />
          <NavBarLoged />
          <div id="create-background">
            <div id="create-cards-container">
              <div id="create-cards">
                <div className="create-card">
                  <h1>Create Post</h1>
                  <form id="createPost-form" action="">
                    <TitleResume
                      showCards={showCards}
                      handleChange={handleChange}
                    />
                    <Selects
                      showCards={showCards}
                      handleSelect={handleSelect}
                      categorys={categorys}
                      playlists={playlists}
                    />
                    <NewButtons
                      showHideCards={showHideCards}
                      handleChange={handleChange}
                      handleNewCategory={handleNewCategory}
                    />
                  </form>
                  <div className="post-passNext">
                    <input type="button" value="Next" onClick={moverForm} />
                  </div>
                </div>
                <ContentCard
                  handleChange={handleChange}
                  moverForm={moverForm}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
