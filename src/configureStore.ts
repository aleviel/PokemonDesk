import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './store/createRootReducer';

const enhancers: [] = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    if (typeof devToolsExtension === 'function') {
        // @ts-ignore
        enhancers.push(devToolsExtension());
    }
}

export default function configureStore(preloadedStore = {}) {
    return createStore(createRootReducer(), preloadedStore, compose(applyMiddleware(thunk), ...enhancers));
}
