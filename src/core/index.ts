import process from 'node:process';
import path from 'node:path';
import Koa from 'koa';
import dotenv from 'dotenv';
import { env } from './env';
import { getMode } from './utils';
import type { TinupCoreStartOptions, TinupCoreAppExtendedContext } from './types';

const defaultOptions: Required<TinupCoreStartOptions> = {
  name: 'Tinup Core',
  port: Number(process.env.PORT || 8080),
  hostname: process.env.HOSTNAME || '0.0.0.0',
};

const TinupCore = {
  /**
   * Start the Tinup core server.
   * @param options - The options for the server
   */
  start(options: TinupCoreStartOptions = defaultOptions) {
    const mode = getMode();
    dotenv.config({ path: path.resolve(process.cwd(), `.env${mode ? `.${mode}` : ''}`) });

    const app = new Koa<unknown, TinupCoreAppExtendedContext>();

    const processedOptions: Required<TinupCoreStartOptions> = {
      ...defaultOptions,
      ...options,
    };

    // Port
    const port = processedOptions.port;
    // Hostname
    const hostname = processedOptions.hostname;
    // Base directory
    const baseDir = process.cwd();
    // Business directory
    const bizDir = path.resolve(baseDir, `.${path.sep}app`);

    app.context.options = processedOptions;
    app.context.baseDir = baseDir;
    app.context.bizDir = bizDir;
    app.context.envUtil = env();

    app.listen(port, hostname, () => {
      console.info(`Server running at http://${hostname}:${port}`);
      console.info(`Business directory: ${bizDir}`);
      console.info(`Environment: ${app.context.envUtil.getEnv()}`);
    });
  },
};

export default TinupCore;
