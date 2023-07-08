import { CalculateInvoice } from "@/application/use-case";
import { TransactionDatabaseRepository } from "@/infra/repository";
import { CurrencyGatewayHttp } from "@/infra/gateway";
import { AxiosAdapter, ExpressAdapter } from "@/infra/http";
import { PostgresAdapter } from "./infra/database";
import { InvoiceController } from "./infra/controller";
import { RealClock } from "@/infra/real-clock";

const port = Number(process.env["SERVER_PORT"]) || 3000;

const currencyAPIBaseUrl =
  process.env["CURRENCY_API_URL"] || "http://localhost:3001";

const conn = new PostgresAdapter();

const transactionRepository = new TransactionDatabaseRepository(conn);

const httpClient = new AxiosAdapter();

const currencyGateway = new CurrencyGatewayHttp(httpClient, currencyAPIBaseUrl);

const clock = new RealClock();

const calculateInvoice = new CalculateInvoice(
  transactionRepository,
  currencyGateway,
  clock
);

const httpServer = new ExpressAdapter();

new InvoiceController(httpServer, calculateInvoice);

httpServer.listen(port);
