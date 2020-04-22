export type Color = {
  lightTheme: string;
  medTheme?: string;
  darkTheme: string;
};

export const incomeColor: Color = {
  lightTheme: "#FCEAEA",
  darkTheme: "#F89191",
};

export const expenseColor: Color = {
  lightTheme: "#EAEBFC",
  darkTheme: "#7F86FC",
};

export const savingsColor: Color = {
  lightTheme: "#EAF6FC",
  darkTheme: "#8DD9FF",
};

export const appColor = {
  lightTheme: "#F8F8F8",
  medTheme: "#E8E7E7",
  darkTheme: "#707070",
};

export function getTheme(type: string): Color {
  switch (type) {
    case "income":
      return incomeColor;
      break;
    case "expense":
      return expenseColor;
      break;
    default:
      return savingsColor;
  }
}
