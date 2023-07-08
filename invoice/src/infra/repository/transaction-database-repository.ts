import { TransactionRepository } from "@/application/repository";
import { Connection } from "@/infra/database";

export class TransactionDatabaseRepository implements TransactionRepository {
  constructor(readonly conn: Connection) {}

  async getTransactions(
    cardNumber: string,
    month: number,
    year: number
  ): Promise<any> {
    const query = /*sql*/ `
      select * from hexa_arch_11_22.card_transaction
      where card_number = $1
      and extract(month from date) = $2
      and extract(year from date) = $3
      `;

    const values: any[] = [cardNumber, month, year];

    const transactions = await this.conn.query(query, values);

    return transactions;
  }
}
