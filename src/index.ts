import process from 'node:process';
import Koa from 'koa';

const app = new Koa();

const port = Number(process.env.PORT) || 8080;
const hostname = process.env.HOSTNAME || '0.0.0.0';

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}`);
});
