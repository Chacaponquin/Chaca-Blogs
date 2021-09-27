import axios from "axios";

export const getComments = async(url, publishID) => {
    let { data } = await axios.get(`${url}/comments/${publishID}`);

    return data;
};