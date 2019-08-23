import React from 'react';
import WishlistContainer from '../src/containers/WishlistContainer';

//Redux
import {Provider} from 'react-redux';
import store from '../src/store/store';

const App = () => (
    <Provider store={store}>
        <WishlistContainer/>
    </Provider>

);

export default App;