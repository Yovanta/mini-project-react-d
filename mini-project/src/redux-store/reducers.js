import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { v4 as uuidv4 } from "uuid";
import { expensePersistConfig, incomePersistConfig } from "./persists";

const initialPengeluaran = {
  expenses: [],
};

const EXPENSE_CONST = {
  SET_EXPENSES: "SET_EXPENSES",
  ADD_EXPENSE: "ADD_EXPENSE",
};

const expenseReducer = (state=initialPengeluaran, action) => {
  switch (action.type) {
		case EXPENSE_CONST.ADD_EXPENSE:
			return {
				...state.expenses,
				expenses: [action.newExpense, ...state.expenses],
			};

		default:
			return state;
	}
};

export const addExpenseAction = (expense) => {
  return {
    type: EXPENSE_CONST.ADD_EXPENSE,
    newExpense: expense,
  };
};

const initialIncome = {
  incomes: [],
};

const INCOME_CONST = {
  SET_INCOMES: "SET_INCOMES",
  ADD_INCOME: "ADD_INCOME",
};

const incomeReducer = (state = initialIncome, action) => {
  switch (action.type) {
		case INCOME_CONST.ADD_INCOME:
			return {
				...state,
				incomes: [action.newIncome, ...state.incomes],        
			};

		default:
			return state;
	}
};

export const addIncomeAction = (income) => {
  return {
    type: INCOME_CONST.ADD_INCOME,
    newIncome: income,
  };
};

const rootReducer = combineReducers({
  expenseReducer: persistReducer(expensePersistConfig, expenseReducer),
  incomeReducer: persistReducer(incomePersistConfig, incomeReducer),
});

export default rootReducer;
