import { Invoice } from "@/core/entity";

describe("Invoice entity", () => {
  it("Deve criar uma fatura", () => {
    const transactions = [
      { amount: 100, currency: "BRL" },
      { amount: 1000, currency: "BRL" },
      { amount: 600, currency: "USD" },
    ];

    const currencies = {
      usd: 2,
    };

    const invoice = new Invoice(transactions, currencies);
    const total = invoice.getTotal();

    expect(total).toBe(2300);
  });
});