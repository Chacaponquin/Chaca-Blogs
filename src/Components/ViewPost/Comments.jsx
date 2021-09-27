const Comments = ({ comment }) => {
  return (
    <>
      <div className="coments">
        <div className="coments-icon-date">
          <h2 className="coment-icon-content">{comment?.creator[0]}</h2>
          <p className="coment-date">{comment?.date}</p>
        </div>
        <div className="coment-content">
          <h3>{comment?.creator}</h3>
          <p>{comment?.content}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
