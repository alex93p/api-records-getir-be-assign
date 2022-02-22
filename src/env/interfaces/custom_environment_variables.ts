/*
    https://jvilk.com/MakeTypes/
 */

const NODE_ENV_DEV = "dev" as const;
const NODE_ENV_PRODUCTION = "production" as const;
export type NODE_ENV = typeof NODE_ENV_DEV | typeof NODE_ENV_PRODUCTION;

const DEPLOYMENT_ENV_DEV = "dev" as const;
const DEPLOYMENT_ENV_PROD = "production" as const;
export type DEPLOYMENT_ENV = typeof DEPLOYMENT_ENV_DEV | typeof DEPLOYMENT_ENV_PROD;

const LOGGING_TARGET_AUDITLOG = "audit_log";
const LOGGING_TARGET_CONSOLE = "console";
export type LOGGING_TARGET = typeof LOGGING_TARGET_CONSOLE | typeof LOGGING_TARGET_AUDITLOG;

export interface custom_environment_variables {
  NODE_ENV: NODE_ENV;
  DEPLOYMENT_ENV: DEPLOYMENT_ENV;
  LOGGING_TARGET: LOGGING_TARGET
  SERVER: SERVER;
  GCP: GOOGLECLOUDPLATFORM;
  GOOGLE_APPLICATION_CREDENTIALS: string;
  MYSQL: MYSQL
  MONGODB: MONGODB
  APIS: APIS
  OLD_APIS: OLD_APIS
  GOOGLE_MAPS_API_KEY: string
  APP_URLS: APP_URLS
}

export interface APP_URLS {
  APP_LOGIN_URL: string
  SUPPLIERS_SIGNUP_URL: string
  SUPPLIERS_MANAGER_REGISTRATION_REQUEST_URL: string
  PUBLIC_PAGE_BUILDINGS_URL: string
  ACCOUNT_MANAGEMENT_AUTH_RESET_PWD: string
}

export interface OLD_APIS {
  AMMINISTRO: string
  ARCHIVIOPLUS: string
}
export interface APIS {
  API_ADMINISTRATION: API_TYPE
  API_TEMPLATING: API_TYPE
}
export interface API_TYPE {
  URL: string
  APIKEY: string
}
export interface SERVER {
  PORT: string;
  URL: string;
}
export interface GOOGLECLOUDPLATFORM {
  PROJECT_ID: string;
  SERVICE_NAME: string;
  SERVICE_TYPE: string;
  SERVICE_ACCOUNT_KEY: string;
  MICROSERVICE_NAME: string;
  FIREBASE_DATABASE_URL: string
  TENANT_ID: string
  IDENTITY_PROVIDER_URL: string
  IDENTITY_PROVIDER_APIKEY: string
  PUBSUB: PUBSUB
}
export interface PUBSUB {
  TRACE_NUOVI_IMMOBILI: string
  TRACE_IMMOBILI: string
  TRACE_UNITA_IMMOBILIARI: string
  TRACE_LICENZE_UTENTI: string
}
export interface MYSQL {
  HOST: string
  USERNAME: string
  PASSWORD: string
  DATABASE: string
  DATABASE_DYLOG_CITYUP: string
  DATABASE_DYLOG_CITYONLINE: string
  DATABASE_DYLOG_SFERA: string
  DATABASE_MICHELANGELO_CLIENTSERVER: string
}
export interface MONGODB {
  HOST: string
  PORT: string
  DATABASE: string
  USERNAME: string
  PASSWORD: string
}
