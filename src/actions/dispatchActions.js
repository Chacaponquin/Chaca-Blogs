import axios from "axios";

export const getPosts = async(url, posts) => {
    let newPosts = [];

    for (let i = 0; i < posts.length; i++) {
        let { data } = await axios.get(`${url}/post/${posts[i]}`);

        newPosts = [...newPosts, data];
    }

    return newPosts;
};

export const getPlaylists = async(url, profileID) => {
    let { data } = await axios.get(`${url}/profile/${profileID}`);

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].posts.length; j++) {
            let res = await axios.get(`${url}/post/${data[i].posts[j]}`);
            data[i].posts[j] = res.data;
        }
    }

    return data;
};

export const deletePost = async(
    url,
    setActiveProfile,
    publishID,
    creatorID
) => {
    let { data } = await axios.delete(
        `${url}/deletePost/${publishID}/${creatorID}`
    );

    setActiveProfile(data);
};

export const deletePostFromPlaylist = async(
    url,
    setActiveProfile,
    publishID,
    creatorID
) => {
    let { data } = await axios.delete(
        `${url}/deletePostFromPlaylist/${publishID}/${creatorID}`
    );

    setActiveProfile(data);
};

export const deleteAllPlaylist = async(
    url,
    setActiveProfile,
    playlistID,
    creatorID
) => {
    let { data } = await axios.delete(
        `${url}/deleteAllPlaylist/${playlistID}/${creatorID}`
    );

    setActiveProfile(data);
};

export const deletePlaylist = async(
    url,
    setActiveProfile,
    playlistID,
    creatorID
) => {
    let { data } = await axios.delete(
        `${url}/deletePlaylist/${playlistID}/${creatorID}`
    );

    setActiveProfile(data);
};