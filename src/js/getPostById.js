import axios from "axios";

export const getPostById = async(url, publishID) => {
    let { data } = await axios.get(`${url}/post/${publishID}`);

    return data;
};