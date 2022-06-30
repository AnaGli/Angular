import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

 private transferList: any[];
  constructor() { 
    this.transferList = [];
  }

  getTransfers(){
    return this.transferList;
  }
}
