import { useContext, useRef, useState } from "react";
import {
  deleteAllPlaylist,
  deletePlaylist,
  deletePost,
  deletePostFromPlaylist,
} from "../actions/dispatchActions";
import LoadingContext from "../context/LoadingContext";
import ProfileContext from "../context/ProfileContext";
import SectionContext from "../context/SectionContext";

export const useSeeMyProfile = () => {
  const { activeProfile, setActiveProfile } = useContext(ProfileContext);
  const { setSectionOpen } = useContext(SectionContext);
  const { loading, setLoading, API } = useContext(LoadingContext);
  const [sectionActive, setSectionActive] = useState("Posts");
  const [showPlaylist, setshowPlaylist] = useState([]);
  const isMount = useRef(true);

  const ChangeSection = (e) => {
    if (e.target.id === "profile-Posts") {
      if (!e.target.classList.contains("optionSelect")) {
        document
          .getElementById("profile-Playlists")
          .classList.remove("optionSelect");
        e.target.classList.toggle("optionSelect");
        setSectionActive("Posts");
      }
    }
    if (e.target.id === "profile-Playlists") {
      if (!e.target.classList.contains("optionSelect")) {
        document
          .getElementById("profile-Posts")
          .classList.remove("optionSelect");
        e.target.classList.toggle("optionSelect");
        setSectionActive("Playlists");
      }
    }
  };

  const handleShowPlaylist = (e) => {
    if (!e.target.classList.contains("sectionOpen")) {
      setshowPlaylist([...showPlaylist, e.target.id]);
      e.target.classList.toggle("sectionOpen");
      return;
    } else {
      let newData = showPlaylist.filter((el) => el !== e.target.id);
      setshowPlaylist(newData);
      e.target.classList.remove("sectionOpen");
    }
  };

  const handleDeletePost = async (e) => {
    await deletePost(API, setActiveProfile, e.target.id, activeProfile._id);
  };

  const handleDeletePostFromPlay = async (e) => {
    await deletePostFromPlaylist(
      API,
      setActiveProfile,
      e.target.id,
      activeProfile._id
    );
  };

  const handleDeleteAll = async (e) => {
    await deleteAllPlaylist(
      API,
      setActiveProfile,
      e.target.id,
      activeProfile._id
    );
  };

  const handleDeletePlaylist = async (e) => {
    await deletePlaylist(API, setActiveProfile, e.target.id, activeProfile._id);
  };

  return {
    API,
    isMount,
    activeProfile,
    sectionActive,
    showPlaylist,
    setActiveProfile,
    loading,
    setLoading,
    setSectionOpen,
    setSectionActive,
    ChangeSection,
    handleShowPlaylist,
    handleDeletePost,
    handleDeletePostFromPlay,
    handleDeleteAll,
    handleDeletePlaylist,
  };
};
