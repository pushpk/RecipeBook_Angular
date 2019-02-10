import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//mport { EventEmitter } from 'events';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.css']
})
export class ChildTestComponent implements OnInit {

  constructor() { }
  
  @Input() amount: number;
 @Output() amountChange  = new EventEmitter();
 @Output() amountChnageBidning = new EventEmitter();

 withdraw(){
   this.amount -= 100;
   this.amountChange.emit(this.amount);
 }

 
 onvalchange(e){
  this.amount = e.target.value;
  this.amountChnageBidning.emit(this.amount);
}

  ngOnInit() {
  }

}
