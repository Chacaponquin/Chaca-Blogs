import React, { useEffect } from "react";
import "../../css/styleLanding.css";
import { useLanding } from "../../hooks/useLanding";
import { getRandomCat } from "../../js/getRandomCat";
import { getRandomPosts } from "../../js/getRandomPosts";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import LandingFirst from "./LandingFirst";
import LandingSecond from "./LandingSecond";
import LandingThird from "./LandingThird";

const LandingPage = () => {
  const {
    API,
    isMount,
    randomCategorys,
    randomPosts,
    loading,
    setLoading,
    setRandomPosts,
    setRandomCategorys,
  } = useLanding();

  const getInformation = () => {
    setLoading(true);
    Promise.all([getRandomCat(API), getRandomPosts(API)])
      .then((values) => {
        if (isMount.current === true) {
          setRandomCategorys(values[0]);
          setRandomPosts(values[1]);
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
        <div id="landingContainer">
          <LandingFirst />
          <LandingSecond randomCategorys={randomCategorys} />
          <LandingThird randomPosts={randomPosts} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
