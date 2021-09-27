import axios from "axios";

export const getRandomPosts = async(url) => {
    let { data } = await axios.get(`${url}/randomPosts`);

    return data;
};