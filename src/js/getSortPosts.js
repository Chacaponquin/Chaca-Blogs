import axios from "axios";

export const getSortPosts = async(url) => {
    let { data } = await axios.get(`${url}/sortPosts`);

    return data;
};