import { CurrencyGateway } from "@/application/gateway";
import { HttpClient } from "@/infra/http";

export class CurrencyGatewayHttp implements CurrencyGateway {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}
  async getCurrencies(): Promise<any> {
    const currencies = await this.httpClient.get(`${this.baseUrl}/currencies`);

    return currencies;
  }
}
