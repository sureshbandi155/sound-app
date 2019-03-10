import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() display: {user: string, email: string, salary: number, designation: string, domain: string};
  constructor() { }
  data = {
    userName: '',
    email: '',
    salary: '',
    Designation: '',
    Domain: ''
   }

  ngOnInit() {
    this.display.user = this.data.userName;
    this.display.email = this.data.email;

    // this.display.salary = this.data.salary;

    this.display.designation = this.data.Designation;
    this.display.domain = this.data.Domain;

  }






}
