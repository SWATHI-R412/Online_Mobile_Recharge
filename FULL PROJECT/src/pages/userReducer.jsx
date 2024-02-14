// userReducer.js
const initialState = {
    fullName: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          fullName: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  