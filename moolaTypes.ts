export type Transaction = {
  readonly id: number;
  amount: number;
  name: string;
  repeat?: string;
  readonly date?: string;
  readonly type: "income" | "expense" | "savings";
};

export type Income = Transaction & {
  // light: 'hello'
  name: "side gig" | "work bonus" | { custom: string };
};

export type Expense = Transaction & {
  name: "bills" | "food" | "shopping" | { custom: string };
};

export type Savings = Transaction & {
  endDate: Date;
};
