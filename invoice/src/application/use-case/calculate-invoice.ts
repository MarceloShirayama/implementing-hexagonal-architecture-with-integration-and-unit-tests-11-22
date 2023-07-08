import { CurrencyGateway } from "@/application/gateway";
import { TransactionRepository } from "@/application/repository";
import { Invoice } from "@/core/entity";
import { Clock } from "../clock";

export class CalculateInvoice {
  constructor(
    readonly transactionRepository: TransactionRepository,
    readonly currencyGateway: CurrencyGateway,
    readonly clock: Clock
  ) {}

  async execute(cardNumber: string) {
    const month = this.clock.getToday().getMonth() + 1;
    const year = this.clock.getToday().getFullYear();

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
