"use strict";
import {
  aboutModule
} from './about.module'

import {
  AboutService
} from './about.service'

export class AboutCtrl {
  static DIName = "AboutCtrl"
  static $inject: string[] = [
    AboutService.DIName
  ];

  private name: String;

  constructor(
    aboutService: AboutService
  ) {
    this.name = aboutService.tell();
  }
}

aboutModule
  .controller(
    AboutCtrl.DIName, 
    AboutCtrl
  );