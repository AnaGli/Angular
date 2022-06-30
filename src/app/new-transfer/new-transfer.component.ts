import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Output() onTransfer = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  value: number;
  target: number; 

  transfer(){
    this.onTransfer.emit({value: this.value, target: this.target})
  }

}
