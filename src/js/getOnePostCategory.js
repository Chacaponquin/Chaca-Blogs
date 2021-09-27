import axios from "axios";

export const getOnePostCategory = async(url, setCategoryPosts) => {
    let { data } = await axios.get(`${url}/posts/oneCategory`);

    return data;
};