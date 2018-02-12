import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import * as oclazyLoad from 'oclazyload';

export const appModule = angular.module('app', ['oc.lazyLoad', uirouter])
  