import { CalculateInvoice } from "@/application/use-case";
import { TransactionDatabaseRepository } from "@/infra/repository";
import { CurrencyGatewayHttp } from "@/infra/gateway";
import { AxiosAdapter, ExpressAdapter } from "@/infra/http";
import { PostgresAdapter } from "./infra/database";
import { InvoiceController } from "./infra/controller";

const port = Number(process.env["SERVER_PORT"]) || 3000;

const currencyAPIBaseUrl =
  process.env["CURRENCY_API_URL"] || "http://localhost:3001";

const conn = new PostgresAdapter();

const transactionRepository = new TransactionDatabaseRepository(conn);

const httpClient = new AxiosAdapter();

const currencyGateway = new CurrencyGatewayHttp(httpClient, currencyAPIBaseUrl);

const calculateInvoice = new CalculateInvoice(
  transactionRepository,
  currencyGateway
);

const httpServer = new ExpressAdapter();

new InvoiceController(httpServer, calculateInvoice);

httpServer.listen(port);
