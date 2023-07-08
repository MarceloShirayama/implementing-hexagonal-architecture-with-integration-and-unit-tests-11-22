import { CurrencyGateway } from "@/application/gateway";
import { TransactionRepository } from "@/application/repository";
import { Invoice } from "@/core/entity";

export class CalculateInvoice {
  constructor(
    readonly transactionRepository: TransactionRepository,
    readonly currencyGateway: CurrencyGateway
  ) {}

  async execute(cardNumber: string) {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const currencies = await this.currencyGateway.getCurrencies();

    const transactions = await this.transactionRepository.getTransactions(
      cardNumber,
      month,
      year
    );

    const invoice = new Invoice(transactions, currencies);

    const total = invoice.getTotal();

    return { total };
  }
}
