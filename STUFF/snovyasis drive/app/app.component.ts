import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataModule} from './data.module';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: DataModule[] = [
    new DataModule('suresh', 'suresh@gmail.com', 'tirupati', 9640039098, 'softwareEngineer'),
    new DataModule('suresh', 'suresh@gmail.com', 'tirupati', 9640039098, 'softwareEngineer'),
    new DataModule('ramesh', 'suresh@gmail.com', 'tirupati', 9640039098, 'softwareEngineer')
  ];
  @ViewChild('userContent') userContent: ElementRef;

  title = 'snovyasis-drive';
  onlyOdd = false;
  onlyEven = false;
/*  editMode = false;
  editMode1 = false;
/!*  signUp() {
    this.editMode = true;
  }
  signIn() {
    this.editMode1 = true;
  }*!/*/
  onSubmitted(form: NgForm) {
    console.log(form.value);
    console.log(this.userContent.nativeElement.value);
  }
/*  onSubmitted(InputName) {
    console.log(InputName.value);
  }*/
}
