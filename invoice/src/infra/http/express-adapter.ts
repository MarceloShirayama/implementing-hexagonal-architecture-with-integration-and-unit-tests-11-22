import express, { Request, Response } from "express";

import { HttpServer } from "./http-server";

export class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = express();
  }

  register(method: string, url: string, callback: Function): void {
    const methodToLowerCase = method.toLowerCase();

    this.app[methodToLowerCase](
      url,
      async function (req: Request, res: Response) {
        const output = await callback(req.params, req.body);
        res.json(output);
      }
    );
  }

  listen(port: number): void {
    console.info(`Server at port: ${port}`);
    return this.app.listen(port);
  }
}
