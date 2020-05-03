import store from "./store";

export function submitInputValues(type: string, item: any) {
  // todo: add additional validation? probably should go on input component
  if (item) {
    switch (type) {
      case "income":
        store.dispatch({
          type: "ADD_INCOME",
          payload: item,
        });
        break;
      case "expense":
        store.dispatch({
          type: "ADD_EXPENSE",
          payload: item,
        });
        break;
      case "savings":
        store.dispatch({
          type: "ADD_SAVINGS",
          payload: item,
        });
        break;
    }
  } else {
    console.log("please fix inputs");
  }
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
