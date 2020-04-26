import store from "./store";

export function addIncome() {
  return store.dispatch({
    type: "ADD_INCOME",
    payload: null,
  });
}

export function addExpense() {
  return store.dispatch({
    type: "ADD_EXPENSE",
    payload: null,
  });
}

export function setTheme() {
  return store.dispatch({
    type: "SET_THEME",
    payload: null,
  });
}
