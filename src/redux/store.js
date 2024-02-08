//Все в файле redux-store

import dialogsReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-resucer';

let store = {
  _state: {
    profilePage: {
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
      newPostText: 'HDTR',
    },
    dialogsPage: {
      dialogData: [
        {
          id: 1,
          name: 'Dima',
        },
        {
          id: 2,
          name: 'Sveta',
        },
        {
          id: 3,
          name: 'Sasha',
        },
        {
          id: 4,
          name: 'Andrew',
        },
      ],
      messageData: [
        {
          id: 1,
          message: 'Hi',
          countMessage: 2,
        },
        {
          id: 2,
          message: 'Yo',
          countMessage: 1,
        },
        {
          id: 3,
          message: 'By',
          countMessage: 4,
        },
        {
          id: 4,
          message: 'Hi',
          countMessage: 6,
        },
      ],
      newMessageBody: '',
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Andrew' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Andrew' },
      ],
    },
  },
  _callSubscriber() {
    console.log('State Changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
