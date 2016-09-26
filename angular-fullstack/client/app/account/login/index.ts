'use strict';
const angular = require('angular');
import LoginController from './login.controller';

export default angular.module('angularFullstackApp.login', [])
  .controller('LoginController', LoginController)
  .name;
