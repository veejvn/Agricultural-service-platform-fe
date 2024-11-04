import env from '@configs/env.config';

const ROUTE_TYPES = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
};

const SERVER_URL = {
  API: `${env.serverUrl}/api`,
  AUTH: `${env.serverUrl}/auth`,
};

const ROLES = {
  CONSUMER: 'CONSUMER',
  FARMER: 'FARMER',
  SPECIALIST: 'SPECIALIST',
  ADMIN: 'ADMIN',
};

export { ROUTE_TYPES, SERVER_URL, ROLES };
