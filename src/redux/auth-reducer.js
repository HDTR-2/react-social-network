import { authAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET-USER-DATA';
const ERROR_MESSAGE = 'auth/ERROR-MESSAGE';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const errorAC = (error) => ({ type: ERROR_MESSAGE, payload: { error } });

export const getAuthUserData = () => async (dispatch) => {
  const data = await authAPI.getAuthMe();
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
    dispatch(errorAC(message));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
