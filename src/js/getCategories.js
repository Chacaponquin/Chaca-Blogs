import axios from "axios";

export const getCategories = async(url) => {
    let { data } = await axios.get(`${url}/categories`);

    return data;
};