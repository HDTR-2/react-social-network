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
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messageData: [...state.messageData, { id: 5, message: body, countMessage: 0 }],
      };

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
