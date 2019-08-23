import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { saveWishlist } from './store/actions/wishlistAction.js';
import mockAxios from 'axios';

it('add new wishlist', async () => {

  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      id: "1"
    }
  }))
  //work
  const wishlists = { "id": -1, "name": 'hola', "products": [] };
  const newID = await saveWishlist(wishlists);
  console.log(newID);
  //expects
  expect(mockAxios.post);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
