import axios from "axios";

export const getCategoryPosts = async(url, categoryName) => {
    let { data } = await axios.get(`${url}/categoryPosts/${categoryName}`);

    return data;
};