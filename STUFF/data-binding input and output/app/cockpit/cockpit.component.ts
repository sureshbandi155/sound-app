import {Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: 'cockpit.component.html'
})
export class CockpitComponent {
  @Output('sCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  /*newServerName = '';*/
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }
  onAddServer(nameInput: HTMLInputElement) {
    /*console.log(nameInput.value);*/
    /*console.log(this.serverContentInput);*/
    this.serverCreated.emit({
      serverName: nameInput.value/* this.newServerName*/,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value/*this.newServerName*/,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
