import packageJson from "../../package.json";
import env from "./functions/parsedEnv";

export default {
  ...env,
  ...{
    VERSION: packageJson.version,
    API_VERSION: packageJson["api-version"]
  },
};
