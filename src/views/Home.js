import React from 'react';
import WishlistContainer from '../containers/WishlistContainer';

//Redux
import {Provider} from 'react-redux';
import store from '../store/store';

const Home = () => (
    <Provider store={store}>
        <WishlistContainer/>
    </Provider>

);

export default Home;