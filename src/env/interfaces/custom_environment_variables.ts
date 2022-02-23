const NODE_ENV_DEV = 'dev' as const;
const NODE_ENV_PRODUCTION = 'production' as const;
export type NODE_ENV = typeof NODE_ENV_DEV | typeof NODE_ENV_PRODUCTION;

export interface custom_environment_variables {
  NODE_ENV: NODE_ENV;
  SERVER: SERVER;
  MONGODB: string;
}
export interface SERVER {
  PORT: string;
  URL: string;
}
