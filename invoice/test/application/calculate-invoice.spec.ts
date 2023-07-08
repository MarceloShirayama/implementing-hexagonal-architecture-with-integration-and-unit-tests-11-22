import { CurrencyGateway } from "@/application/gateway";
import { TransactionRepository } from "@/application/repository";
import { CalculateInvoice } from "@/application/use-case";

describe("Calculate invoice use case", () => {
  it("Deve calcular a fatura", async () => {
    const transactionRepository: TransactionRepository = {
      async getTransactions(
        _cardNumber: string,
        _month: number,
        _year: number
      ): Promise<any> {
        return [
          { amount: 100, currency: "BRL" },
          { amount: 1000, currency: "BRL" },
          { amount: 600, currency: "USD" },
        ];
      },
    };

    const currencyGateway: CurrencyGateway = {
      async getCurrencies(): Promise<any> {
        return {
          usd: 2,
        };
      },
    };

    const calculateInvoice = new CalculateInvoice(
      transactionRepository,
      currencyGateway
    );
    const output = await calculateInvoice.execute("1234");

    expect(output.total).toBe(2300);
  });
});
