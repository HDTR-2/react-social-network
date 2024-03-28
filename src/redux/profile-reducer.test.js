import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
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
};

it('length post + 1', () => {
  //1 test data
  let action = addPostActionCreator('New Post');

  //2 action
  let newState = profileReducer(state, action);

  //3 expectation
  expect(newState.postData.length).toBe(5);
});
it('length post - 1', () => {
  //1 test data
  let action = deletePost(1);

  //2 action
  let newState = profileReducer(state, action);

  //3 expectation
  expect(newState.postData.length).toBe(3);
});
