import axios from 'axios';
import { SHOW_WISHLIST } from './types';

export const showWishlist = (url) => async dispatch => {
  const response = await axios.post(`https://my-json-server.typicode.com/lionicex/testlutz/whislist`);
  dispatch({
      type: SHOW_WISHLIST,
      payload: response
  })


};
