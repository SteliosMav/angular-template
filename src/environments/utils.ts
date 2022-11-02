export interface Environment {
  env: 'PRODUCTION' | 'STAGING' | 'DEVELOPMENT';
  backend:
    | Consts.HOSTED_DEV_API
    | Consts.HOSTED_STAG_API
    | Consts.HOSTED_PROD_API
    | Consts.LOCAL_API;
}

export enum Consts {
  HOSTED_DEV_API = 'https://example-dev.com/api',
  HOSTED_STAG_API = 'https://example-stag.com/api',
  HOSTED_PROD_API = 'https://example.com/api',
  LOCAL_API = 'http://localhost:3000',
}
