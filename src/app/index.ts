"use strict";

export * from './app';

import {
  routing
} from './app.config';

import {
  appModule
} from './app'

appModule
  .config(routing);