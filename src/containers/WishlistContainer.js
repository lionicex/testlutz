import React, { Component } from 'react';
import Wishlist from "../components/Wishlist";
import { connect } from "react-redux";
import { showWishlist, addWishlist } from '../store/actions/wishlistAction';
export class WishlistContainer extends Component {

  componentDidMount() {

    this.props.showWishlist();
  }


  render() {
    return (
      <Wishlist list={this.props.wishlist}
        addWishlist={this.props.addWishlist} />
    )
  }
}

const mapStateToProps = state => ({
  wishlist: state.wishlist.wishlist
});
export default connect(mapStateToProps, { showWishlist, addWishlist })(WishlistContainer);