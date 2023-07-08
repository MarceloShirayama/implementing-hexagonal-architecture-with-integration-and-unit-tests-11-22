import { CalculateInvoice } from "@/application/use-case";
import { HttpServer } from "@/infra/http";

export class InvoiceController {
  constructor(
    readonly httpServer: HttpServer,
    readonly calculateInvoice: CalculateInvoice
  ) {
    httpServer.register(
      "GET",
      "/cards/:cardNumber/invoices",
      async function (params: any, _body: any) {
        const cardNumber = params["cardNumber"];

        const output = await calculateInvoice.execute(cardNumber);

        return output;
      }
    );
  }
}
