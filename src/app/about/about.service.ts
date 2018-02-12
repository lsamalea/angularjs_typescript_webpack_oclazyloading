"use strict";
import {
  aboutModule
} from './about.module'

export class AboutService {
  static DIName = "AboutService"
  static $inject: string[] = [    
  ];
  private name: string;

  constructor() {
    this.name = 'me?';
  }

  tell() {
    return 'About ' + this.name;
  }
}

aboutModule
  .service(
    AboutService.DIName,
    AboutService
  )