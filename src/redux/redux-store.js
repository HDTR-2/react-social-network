import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer';
import sidebarReducer from './sidebar-resucer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { thunk as thunkMidleware } from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));

window.store = store;

export default store;
