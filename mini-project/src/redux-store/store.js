import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from './reducers'

const expenseStore = () => {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const composedMiddleware = composeWithDevTools(middlewareEnhancer);
    return createStore(reducers, composedMiddleware);
}

const incomeStore = () => {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const composedMiddleware = composeWithDevTools(middlewareEnhancer);
    return createStore(reducers, composedMiddleware);
}

const store = expenseStore();
const persistor = persistStore(store)

const storeIncome = incomeStore();
const persistorIncome = persistStore(storeIncome)

export {store, persistor, storeIncome, persistorIncome};