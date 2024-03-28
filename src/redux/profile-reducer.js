import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  postData: [
    {
      id: 1,
      message: 'Hi',
      likesCount: 11,
    },
    {
      id: 2,
      message: 'Yo',

      likesCount: 121,
    },
    {
      id: 3,
      message: 'By',

      likesCount: 111,
    },
    {
      id: 4,
      message: 'Hi',

      likesCount: 411,
    },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likesCount: 0,
      };
      return { ...state, postData: [...state.postData, newPost], newPostBody: '' };
    }
    case DELETE_POST: {
      return { ...state, postData: state.postData.filter((p) => p.id !== action.postId) };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

//Thunk========================================================================================================================================================

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
