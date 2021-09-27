import { useEffect } from "react";
import CreateHomePost from "./CreateHomePost";
import HomeCards from "./HomeCards";

const HomePostConatiner = ({
  setShowPosts,
  sortPosts,
  contShowPosts,
  showPosts,
  handleNextShowPosts,
  handleBackShowPosts,
  handleRedirect,
  handleSeePosts,
}) => {
  useEffect(() => {
    setShowPosts(sortPosts.slice(contShowPosts - 12, contShowPosts));
  }, [contShowPosts]);

  return (
    <>
      <div id="home-recommendedPosts">
        <div id="home-recommendedPosts-container">
          {showPosts &&
            showPosts.map((el) => (
              <CreateHomePost
                key={el._id}
                post={el}
                handleSeePosts={handleSeePosts}
              />
            ))}
        </div>
        <div id="change-recommendedPosts">
          <input
            type="button"
            value="Back"
            onClick={handleBackShowPosts}
            disabled={contShowPosts === 12 ? true : false}
          />
          <input type="button" value="Next" onClick={handleNextShowPosts} />
        </div>
      </div>
      <HomeCards handleRedirect={handleRedirect} />
    </>
  );
};

export default HomePostConatiner;
