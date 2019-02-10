import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() element : {type: string, name: string, content : string}

  @Output() valueChangeChild = new EventEmitter<number>();
  Counter = 0;

  valueChangedChild() { 
    this.Counter = this.Counter + 1;
    this.valueChangeChild.emit(this.Counter);
}
  
  constructor() { }

  ngOnInit() {
  }



}
