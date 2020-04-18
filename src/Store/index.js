import { createStore, applyMiddleware, compose } from 'redux';
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


import reducer from "../Reducer";
import saga from "../Saga";
import { DEV } from '../Constants';

let composeMethod = compose;
if(process.env.NODE_ENV === DEV){
    composeMethod = composeWithDevTools;
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

// mount it on the Store
const store = createStore(
    reducer,
    {},
    composeMethod(
        applyMiddleware(...middleWares)
    )
);

// then run the saga
sagaMiddleware.run(saga);

export default store;