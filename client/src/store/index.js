import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers';

const rootReducer = mainReducer;

const store = createStore(
    rootReducer,
    {
        isAuth: false,
        isAdAuth: false,
        userEmail: '',
        adminName: ''
    },
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;