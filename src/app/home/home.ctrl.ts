"use strict";
import {
  homeModule
} from './home.module'

export class HomeCtrl {
    static DIName = "HomeCtrl"
    static $inject: string[] = [
    ];
  
    private name: String;
  
    constructor(      
    ) {
      console.log("home ctroller");
    }
  }
  
  homeModule
    .controller(
      HomeCtrl.DIName, 
      HomeCtrl
    );