import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/index';
import {User} from './user.model';

@Injectable()
export class ServerService {
    private serviceUrl = 'http://172.104.6.14:3000/api/Areas';
  constructor(private http: Http,
              private httpCli: HttpClient) {}

  getServers() {
    return this.http.get('http://172.104.6.14:3000/api/Areas');
  }
  getUsers(): Observable<User[]> {
    return this.httpCli.get<User[]>(this.serviceUrl);
  }
  userExample(): Observable<User[]> {
    return this.httpCli.get<User[]>(this.serviceUrl);
  }
}
