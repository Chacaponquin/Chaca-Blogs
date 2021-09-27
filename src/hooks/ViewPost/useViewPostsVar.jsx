import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import LoadingContext from "../../context/LoadingContext";
import ProfileContext from "../../context/ProfileContext";
import SectionContext from "../../context/SectionContext";

export const useViewPostVar = () => {
  let history = useHistory();
  const isMount = useRef(true);
  const commentInput = useRef();
  const contador = useRef(3);
  const { activeProfile } = useContext(ProfileContext);
  const { setSectionOpen } = useContext(SectionContext);
  const { loading, setLoading, API } = useContext(LoadingContext);

  const [newComment, setNewComment] = useState({
    content: "",
    creator: activeProfile._id,
  });
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([]);
  const [postFound, setPostFound] = useState([]);
  const [articlesRec, setArticlesRec] = useState([]);

  return {
    API,
    isMount,
    commentInput,
    loading,
    history,
    activeProfile,
    setSectionOpen,
    newComment,
    comments,
    showComments,
    contador,
    postFound,
    articlesRec,
    setLoading,
    setNewComment,
    setComments,
    setShowComments,
    setPostFound,
    setArticlesRec,
  };
};
