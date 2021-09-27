import axios from "axios";

export const getRecommended = async(url, publishID) => {
    let res = await axios.get(`${url}/post/${publishID}`);

    let { data } = await axios.get(`${url}/category/${res.data.category}`);

    return data;
};