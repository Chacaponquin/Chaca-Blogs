import axios from "axios";

export const getPlaylist = async(url, id) => {
    let { data } = await axios.get(`${url}/profile/${id}`);

    return data;
};