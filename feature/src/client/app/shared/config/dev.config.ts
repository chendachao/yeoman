import {EnvConfig} from './interfaces/EnvConfig';

/**
 * Conditionally loaded based on ~production flag in jspm.config:
 *
 *  "map": {
 *      "./shared/config/prod.config": {
 *        "~production": "./shared/config/dev.config"
 *      }
 *    }
 *
 *   gulp dev task will load ./shared/config/dev.config.
 *   bulp prod task will load ./shared/config/prod.config
 *
 *   This is a feature driven by SystemJS, where the SystemJS
 *   builder ( via JSPM ) builder.buildStatic method will
 *   load the "./shared/config/prod.config" path.
 *
 *   For more info, see http://jspm.io/0.17-beta-guide/conditional-loading.html
 */
export const Config: EnvConfig = {
  API: 'localhost://demo.com:9000',
  ENV: 'DEV',
  BASE: '/'
};
