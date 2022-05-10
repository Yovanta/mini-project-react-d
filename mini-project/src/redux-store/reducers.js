import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { v4 as uuidv4 } from "uuid";
import { expensePersistConfig, incomePersistConfig } from "./persists";

const initialValue = {
  expenses: [
    {
      id: uuidv4(),
      jumlah: 12000,
      notes: "Belanja",
      date: "20/03/2022",
    },
    {
      id: uuidv4(),
      jumlah: 34000,
      notes: "Belanja sayur",
      date: "20/03/2022",
    },
  ],
};

const EXPENSE_CONST = {
  SET_EXPENSES: "SET_EXPENSES",
  ADD_EXPENSE: "ADD_EXPENSE",
};

const expenseReducer = (state = initialValue, action) => {
  switch (action.type) {
		case EXPENSE_CONST.ADD_EXPENSE:
			return {
				...state,
				expenses: [...state.expenses, action.newExpense],
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

const INCOME_CONST = {
  SET_INCOMES: "SET_INCOMES",
  ADD_INCOME: "ADD_INCOME",
};

const incomeReducer = (state = 0, action) => {
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
