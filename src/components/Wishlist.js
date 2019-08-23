import React from 'react';
import '../css/wishlist.css';

export const Wishlist = ({ list, addWishlist }) => {

  return (
    <div>
      <p>{list.id}</p>
      <p>{list.name}</p>
      <p>{list.product}</p>
      <button type="button" className="btn btn-primary" onClick={addWishlist}>Add to wishlist</button>
    </div>
    )

};


export default Wishlist;