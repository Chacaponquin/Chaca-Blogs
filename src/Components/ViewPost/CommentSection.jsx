import Comments from "./Comments";

const CommentSection = ({
  comments,
  showComments,
  commentInput,
  handleChangeComment,
  handleSubmitComment,
  handleShowComments,
  activeProfile,
  contador,
}) => {
  return (
    <>
      <div id="article-coments">
        <h1>Comentarios</h1>
        <div id="article-coments-post">
          <div>
            <h2 className="coment-icon">{activeProfile?.avatar}</h2>
          </div>
          <div id="post-coment">
            <textarea
              name="content"
              id="coment-message"
              spellCheck="false"
              placeholder="Add a comment..."
              onChange={handleChangeComment}
              ref={commentInput}
            ></textarea>
            <input
              type="button"
              id="article-coments-button"
              value="POST"
              onClick={handleSubmitComment}
            />
          </div>
        </div>
        {showComments &&
          showComments.map((el) => <Comments key={el._id} comment={el} />)}
        {comments.length > 3 && contador.current <= comments.length && (
          <input
            type="button"
            id="coments-readMore"
            value="Leer mas"
            onClick={handleShowComments}
          />
        )}
      </div>
    </>
  );
};

export default CommentSection;
