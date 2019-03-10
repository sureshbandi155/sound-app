import { Component, OnInit } from '@angular/core';
import { ServerService} from '../server.service';
import { Observable} from 'rxjs/index';
import { DataSource} from '@angular/cdk/collections';
import { User} from '../user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
    dataSource = new UserDataSource(this.serverService);
    displayedColumns = ['areaName', 'status', 'cityId', 'id'];
  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any> {
    constructor(private serverService: ServerService) {
        super();
    }
    connect(): Observable<User[]> {
        return this.serverService.getUsers();
    }
    disconnect() {}
}
