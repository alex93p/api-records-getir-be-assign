import packageJson from '../../package.json';
import env from './functions/parsedEnv';

/**
 * this variable is the exported execution environment
 */
export default {
  ...env,
  ...{
    VERSION: packageJson.version,
  },
};
