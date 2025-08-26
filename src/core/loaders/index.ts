import { middleware } from './middleware';
import { routerSchema } from './router-schema';
import { controller } from './controller';
import { service } from './service';
import { config } from './config';
import { extend } from './extend';
import { router } from './router';
import type { App } from '../types';

export const loaders = (app: App) => {
  middleware(app);
  routerSchema(app);
  controller(app);
  service(app);
  config(app);
  extend(app);
  router(app);
};
