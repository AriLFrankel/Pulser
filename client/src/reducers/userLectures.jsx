// reducer for storing all the lectures of a user
const userLectures = (state = [], action) => {
  switch (action.type) {
    case 'STORE_USER_LECTURES':
      return action.payload;
    default:
      return state;
  }
};

export default userLectures;
