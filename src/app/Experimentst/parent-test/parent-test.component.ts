import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-test',
  templateUrl: './parent-test.component.html',
  styleUrls: ['./parent-test.component.css']
})
export class ParentTestComponent implements OnInit {

  constructor() { }

  amount: number = 500;

  deposit(){
    this.amount +=100;
  }
  
  ngOnInit() {

   // return this.foo;
  }

  changedAmt(amt)
  {
    this.amount = amt;
  }
  
  onchangeamt(e)
  {
    this.amount = e;
  }

}
