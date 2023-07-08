import express, { Request, Response } from "express";

const port = process.env["SERVER_PORT"] || 3001;

const app = express();

app.get("/currencies", async (_req: Request, res: Response) => {
  res.json({
    usd: 3 /*+ Math.random()*/,
  });
});

app.listen(port, () => console.info(`Server at port: ${port}`));
