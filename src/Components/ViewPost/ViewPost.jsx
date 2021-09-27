import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../css/styleArticle.css";
import { useViewPost } from "../../hooks/ViewPost/useViewPost";
import { getComments } from "../../js/getComments";
import { getPostById } from "../../js/getPostById";
import { getRecommended } from "../../js/getRecommended";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import ViewPostHeader from "../NavBars/ViewPostHeader";
import ArticleRec from "./ArticleRec";
import CommentSection from "./CommentSection";
import PostContent from "./PostContent";

const ViewPost = () => {
  let { publishID } = useParams();

  const {
    API,
    contador,
    isMount,
    commentInput,
    loading,
    comments,
    showComments,
    activeProfile,
    postFound,
    articlesRec,
    setLoading,
    setSectionOpen,
    setPostFound,
    setArticlesRec,
    setComments,
    setShowComments,
    handleSubmitComment,
    handleChangeComment,
    handleShowComments,
    handleRedirect,
    handleLike,
    handleRedirectCategory,
  } = useViewPost(publishID);

  const getInformation = () => {
    setLoading(true);
    Promise.all([
      getPostById(API, publishID),
      getRecommended(API, publishID),
      getComments(API, publishID),
    ])
      .then((values) => {
        setSectionOpen("");

        setPostFound(values[0]);
        setArticlesRec(values[1]);
        setComments(values[2]);
        setShowComments(values[2].slice(0, 3));

        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInformation();

    return () => (isMount.current = false);
  }, [publishID]);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div id="viewContainer">
          <ViewPostHeader
            postFound={postFound}
            handleLike={handleLike}
            activeProfile={activeProfile}
          />
          <PostContent postFound={postFound} />
          <CommentSection
            comments={comments}
            showComments={showComments}
            activeProfile={activeProfile}
            commentInput={commentInput}
            handleShowComments={handleShowComments}
            handleChangeComment={handleChangeComment}
            handleSubmitComment={handleSubmitComment}
            contador={contador}
          />
          <ArticleRec
            articlesRec={articlesRec}
            handleRedirect={handleRedirect}
            handleRedirectCategory={handleRedirectCategory}
          />
          <Footer />
        </div>
      )}
    </>
  );
};

export default ViewPost;
