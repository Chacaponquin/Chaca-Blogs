import { useEffect } from "react";
import "../../css/styleHome.css";
import { useHome } from "../../hooks/useHome";
import { getOnePostCategory } from "../../js/getOnePostCategory";
import { getSortPosts } from "../../js/getSortPosts";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import HomeHeader from "./HomeHeader";
import HomePostConatiner from "./HomePostConatiner";

const Home = () => {
  const {
    API,
    isMountRef,
    loading,
    contador,
    categoryPosts,
    contShowPosts,
    setSectionOpen,
    showPosts,
    setLoading,
    sortPosts,
    setShowPosts,
    setSortPosts,
    setCategoryPosts,
    setContador,
    handleRedirect,
    handleNextShowPosts,
    handleBackShowPosts,
    handleSeePosts,
  } = useHome();

  const getInformation = () => {
    setLoading(true);
    Promise.all([getOnePostCategory(API), getSortPosts(API)])
      .then((values) => {
        if (isMountRef.current === true) {
          setSectionOpen("Home");
          setCategoryPosts(values[0]);
          setSortPosts(values[1]);
          setShowPosts(values[1].slice(0, 12));
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInformation();

    return () => (isMountRef.current = false);
  }, []);

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div id="homeContainer">
          <HomeHeader
            isMountRef={isMountRef}
            categoryPosts={categoryPosts}
            contador={contador}
            setContador={setContador}
            handleRedirect={handleRedirect}
          />
          <div id="home-contentContainer">
            <HomePostConatiner
              contShowPosts={contShowPosts}
              showPosts={showPosts}
              sortPosts={sortPosts}
              setShowPosts={setShowPosts}
              handleNextShowPosts={handleNextShowPosts}
              handleBackShowPosts={handleBackShowPosts}
              handleRedirect={handleRedirect}
              handleSeePosts={handleSeePosts}
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
