import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  // newServerContent = '';
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameElement: HTMLInputElement) {
    this.serverCreated.emit({ serverName: serverNameElement.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(serverNameElement: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverNameElement.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}
