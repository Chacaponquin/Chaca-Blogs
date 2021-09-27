import axios from "axios";
import { updateDislike, updateLike } from "../../js/likeActions";
import { useViewPostVar } from "./useViewPostsVar";

export const useViewPost = (publishID) => {
  const {
    API,
    isMount,
    commentInput,
    history,
    loading,
    activeProfile,
    newComment,
    comments,
    showComments,
    contador,
    postFound,
    articlesRec,
    setLoading,
    setSectionOpen,
    setNewComment,
    setComments,
    setShowComments,
    setPostFound,
    setArticlesRec,
  } = useViewPostVar();

  const handleChangeComment = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitComment = async () => {
    if (newComment.content === "") {
      window.alert("No puedes dejar el comentario vacio");
      return;
    }

    axios
      .post(`${API}/newComment/${publishID}`, newComment)
      .then(({ data }) => {
        setComments(data);
        setShowComments(data.slice(0, contador.current));

        commentInput.current.value = "";
        setNewComment("");
      });
  };

  const handleShowComments = () => {
    contador.current = contador.current + 3;

    setShowComments(comments.slice(0, contador.current));
  };

  const handleRedirect = async (e) => {
    let { data } = await axios.put(`${API}/updateVisit/${e.target.id}`);

    history.push(`/view/${e.target.id}`);
  };

  const handleLike = async (e) => {
    if (!e.target.classList.contains("likedOption")) {
      e.target.classList.remove("dislikedOption");
      e.target.classList.toggle("likedOption");

      await updateLike(API, postFound._id, activeProfile._id);

      setPostFound({
        ...postFound,
        liked: [...postFound.liked, activeProfile._id],
      });
    } else if (e.target.classList.contains("likedOption")) {
      e.target.classList.remove("likedOption");
      e.target.classList.toggle("dislikedOption");

      await updateDislike(API, postFound._id, activeProfile._id);

      if (postFound.liked.length === 1) {
        setPostFound({
          ...postFound,
          liked: [],
        });
        return;
      } else {
        let liked = postFound.liked.filter((el) => el !== activeProfile._id);

        setPostFound({
          ...postFound,
          liked: liked,
        });
      }
    }
  };

  const handleRedirectCategory = (e) => {
    history.push(`/categories/${e.target.id}`);
  };

  return {
    API,
    isMount,
    commentInput,
    loading,
    postFound,
    articlesRec,
    newComment,
    comments,
    showComments,
    contador,
    activeProfile,
    setLoading,
    setSectionOpen,
    setPostFound,
    setArticlesRec,
    setNewComment,
    setShowComments,
    setComments,
    handleChangeComment,
    handleSubmitComment,
    handleShowComments,
    handleRedirect,
    handleLike,
    handleRedirectCategory,
  };
};
