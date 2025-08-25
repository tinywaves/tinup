export interface TinupCoreStartOptions {
  /**
   * The name of the server.
   */
  name?: string;
  /**
   * The port to listen on.
   */
  port?: number;
  /**
   * The hostname to listen on.
   */
  hostname?: string;
}

export interface TinupCoreAppExtendedContext {
  /**
   * The options passed to the server.
   */
  options: TinupCoreStartOptions;
  /**
   * The base directory of the server.
   */
  baseDir: string;
  /**
   * The business directory of the server.
   */
  bizDir: string;
  /**
   * The environment utility.
   */
  envUtil: ReturnType<EnvUtil>;
}

export type EnvUtil = () => ({
  isLocal: () => boolean;
  isDev: () => boolean;
  isTest: () => boolean;
  isStaging: () => boolean;
  isProd: () => boolean;
  getEnv: () => TINUP_ENV;
});

export interface TinupCoreArgs {
  /**
   * The mode of the start command.
   */
  mode: string;
}

export enum TINUP_ENV {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  TESTING = 'testing',
  STAGING = 'staging',
  PRODUCTION = 'production',
}
