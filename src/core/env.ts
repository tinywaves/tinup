import process from 'node:process';
import { TINUP_ENV } from './types';
import type { EnvUtil } from './types';

export const env: EnvUtil = () => ({
  isLocal() {
    return process.env.TINUP_ENV === TINUP_ENV.LOCAL;
  },
  isDev() {
    return process.env.TINUP_ENV === TINUP_ENV.DEVELOPMENT;
  },
  isTest() {
    return process.env.TINUP_ENV === TINUP_ENV.TESTING;
  },
  isStaging() {
    return process.env.TINUP_ENV === TINUP_ENV.STAGING;
  },
  isProd() {
    return process.env.TINUP_ENV === TINUP_ENV.PRODUCTION;
  },
  getEnv() {
    return (process.env.TINUP_ENV || TINUP_ENV.LOCAL) as TINUP_ENV;
  },
});
