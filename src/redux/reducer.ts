const initialState = {
  income: [],
  expenses: [],
  currentTheme: "",
  itemTheme: "",
};

type ActionType = {
  type: string;
  payload?: any;
};

export default function (state = initialState, action: ActionType) {
  switch (action.type) {
    //   case 'GET_FIRSTS':
    //       return {...state, firsts: [...state.firsts, action.payload]}

    default:
      return state;
  }
}