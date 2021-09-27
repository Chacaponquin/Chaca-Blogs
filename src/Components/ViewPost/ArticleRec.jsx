import RecommendedArt from "./RecommendedArt";

const ArticleRec = ({
  articlesRec,
  handleRedirect,
  handleRedirectCategory,
}) => {
  return (
    <>
      <div id="article-relacioned">
        <h1 id="article-relacioned-h1">Recommended Articles</h1>
        <div id="relacioned-article">
          {articlesRec[0] !== null &&
            articlesRec.map((el) => (
              <RecommendedArt
                key={el._id}
                post={el}
                handleRedirect={handleRedirect}
                handleRedirectCategory={handleRedirectCategory}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ArticleRec;
