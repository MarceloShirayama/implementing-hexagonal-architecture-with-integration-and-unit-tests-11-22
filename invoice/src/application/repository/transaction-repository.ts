export type TransactionRepository = {
  getTransactions(
    cardNumber: string,
    month: number,
    year: number
  ): Promise<any>;
};
