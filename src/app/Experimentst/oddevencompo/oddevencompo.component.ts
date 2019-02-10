import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddevencompo',
  templateUrl: './oddevencompo.component.html',
  styleUrls: ['./oddevencompo.component.css']
})
export class OddevencompoComponent implements OnInit {

  arr:number[] = [1,2,3,4,5]
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  
  constructor() { }

  ngOnInit() {
  }

}
