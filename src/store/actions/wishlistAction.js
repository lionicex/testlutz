import axios from 'axios';
import { SHOW_WISHLIST, ADD_WISHLIST } from './types';

// NO es lo mismo pq react es unserver para develop, cuando haces build compila, tu lo 

export const addWishlist = (product) => {
  const wishlists = { "id": -1, "name": '', "products": [product] };
  console.log(wishlists);
  return {
    type: ADD_WISHLIST,
    payload: wishlists
  }
};
export const showWishlist = () => async dispatch => {
  const response = await axios.get("https://my-json-server.typicode.com/lionicex/testlutz/wishlist");

  dispatch({
    type: SHOW_WISHLIST,
    payload: response.data
  })
};

export const saveWishlist = (wishlist) =>  {
  const response =  axios.post("https://my-json-server.typicode.com/lionicex/testlutz/wishlist", wishlist);
  console.log(wishlist.id);
  return JSON.stringify(response);
};
export const modifyWishlistName = (url) => async dispatch => {
  const response = await axios.patch("https://my-json-server.typicode.com/lionicex/testlutz/wishlist");
  console.log(response.data);
  dispatch({
    type: SHOW_WISHLIST,
    payload: response.data
  })
};
