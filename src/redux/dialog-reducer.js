const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      let body = state.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messageData.push({ id: 5, message: body, countMessage: 0 });
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
