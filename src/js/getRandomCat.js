import axios from "axios";

export const getRandomCat = async(url) => {
    let { data } = await axios.get(`${url}/randomCategorys`);

    return data;
};