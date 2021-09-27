import axios from "axios";

export const updateLike = async(url, publishID, profileID) => {
    try {
        let { data } = await axios.put(`${url}/updateLike`, {
            publishID: publishID,
            profileID: profileID,
        });
    } catch (error) {
        console.log(error);
    }
};

export const updateDislike = async(url, publishID, profileID) => {
    try {
        let { data } = await axios.put(`${url}/updateDislike`, {
            publishID: publishID,
            profileID: profileID,
        });
    } catch (error) {
        console.log(error);
    }
};