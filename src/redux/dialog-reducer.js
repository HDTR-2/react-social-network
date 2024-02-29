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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessage;
      return {
        ...state,
        messageData: [...state.messageData, { id: 5, message: body, countMessage: 0 }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;
