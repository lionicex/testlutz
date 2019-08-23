
const initialState = {
  wishlist: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_WISHLIST':
        return {
          ...state,
          wishlist: action.payload
        }
    case 'ADD_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      }
    default:
      return state;
  }
}