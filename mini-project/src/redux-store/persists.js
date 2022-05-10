import storage from "redux-persist/lib/storage";

export const expensePersistConfig = {
    storage,
    key: 'expenses'
}

export const incomePersistConfig = {
    storage,
    key: 'incomes'
}