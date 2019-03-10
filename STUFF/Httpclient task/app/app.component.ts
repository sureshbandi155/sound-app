import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import {ServerService} from './server.service';
import { CliService} from './cli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-api';
  areaDisplayFlag = false;
  areas: {}[] = [];
  public  users = [];
    public userData = [];
    customersArray: object = [];
    constructor(private serverService: ServerService,
              private cliS: CliService) {
  }
  ngOnInit() {
      this.serverService.userExample()
          .subscribe(data => this.users = data);
      /*console.log(this.data);*/
      this.cliS.getData().subscribe(data => this.userData = data);
      this.getStatus();
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (response) => {
          //this.areaDisplayFlag = true;
          this.areas = response.json();
          console.log(this.areas);
        }
      );
  }
  private getStatus() {
     /* this.cliS.exampleData()
          .than(data => {
              console.log(JSON.stringify(data));
              this.customersArray = data;
              console.log('customer staus :' + this.customersArray);
          })
          .catch(error => {
              console.log(error)
          })*/
     this.cliS.exampleData()
         .subscribe(data => {
             this.customersArray = data;
             console.log('customer details' + this.customersArray);
             console.log(data);
         });
  }
}
