import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  submitted = false;
 data = {
  userName: '',
  email: '',
  salary: '',
  Designation: '',
  Domain: ''
 }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.data.userName = this.form.value.user;
    this.data.email = this.form.value.email;

    this.data.salary = this.form.value.salary;

    this.data.Designation = this.form.value.Designation;
    this.data.Domain = this.form.value.Domain;


  }
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.setValue({
      user: 'suresh-hrtzz',
      email: 'a@a.gmail.com',
      salary: '12000',
      Designation: 'software developer',
      Domain: 'Angular '
    });
  }

  onReset() {
    this.form.reset();
  }

}
