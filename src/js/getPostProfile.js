import axios from "axios";

export const getPostProfile = async (creatorID, setPostProfile) => {
  try {
    let { data } = await axios.get(
      `http://localhost:5000/post/profile/${creatorID}`
    );
    setPostProfile(data);
  } catch (error) {
    console.log(error);
  }
};
