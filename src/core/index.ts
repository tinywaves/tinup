import process from 'node:process';
import Koa from 'koa';
import type { TinupCoreStartOptions } from './types';
import path from 'node:path';

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
    const app = new Koa();

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

    app.listen(port, hostname, () => {
      console.info(`Server running at http://${hostname}:${port}`);
      console.info(`Business directory: ${bizDir}`);
    });
  },
};

export default TinupCore;
