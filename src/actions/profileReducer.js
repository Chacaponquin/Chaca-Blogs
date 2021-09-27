import { TYPES } from "./TYPES";

export const profileInfReducer = (profileInf, action) => {
  switch (action.type) {
    case TYPES.SET_POSTS:
      return { ...profileInf, posts: action.payload };
    case TYPES.SET_PLAYLISTS:
      return { ...profileInf, playlists: action.payload };
    default:
      return profileInf;
  }
};
