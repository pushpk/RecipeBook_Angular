import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Input() serverElementsChild = []
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() bluePrintServerCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(newServerName, newServerContent) {
    
    this.serverCreated.emit({
      serverName : newServerName.value,
      serverContent : newServerContent.value
      
    });
  }

  onAddBlueprint(newServerName, newServerContent) {
  
    console.log(newServerName);
    this.bluePrintServerCreated.emit({
      
      serverName : newServerName.value,
      serverContent : newServerContent.value
      
    });
    }

  constructor() { }

  ngOnInit() {
  }

}
