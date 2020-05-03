const initialState = {
  income: [],
  expenses: [],
  savings: [],
  appTheme: "income",
  itemTheme: "income",
};

type ActionType = {
  type: string;
  payload?: any;
};

export default function (state = initialState, action: ActionType) {
  switch (action.type) {
    case "ADD_INCOME":
      return { ...state, income: [...state.income, action.payload] };
    case "ADD_EXPENSE":
      return { ...state, income: [...state.expenses, action.payload] };
    case "ADD_SAVINGS":
      return { ...state, income: [...state.savings, action.payload] };

    default:
      return state;
  }
}
