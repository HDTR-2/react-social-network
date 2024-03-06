import { getAuthUserData } from './auth-reducer';

const SET_INTIALIZED = 'SET-INITIALIZED';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const setInitialized = () => ({ type: SET_INTIALIZED });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
  return promise;
};
export default appReducer;
