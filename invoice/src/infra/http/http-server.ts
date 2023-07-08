export type HttpServer = {
  register(method: string, url: string, callback: Function): void;
  listen(port: number): void;
};
