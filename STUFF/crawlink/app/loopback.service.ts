import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class LoopBackService {
  private url = 'http://172.104.6.14:3000/api/Cities';

  constructor(private httpCli: HttpClient) {}

  getData(): Observable<User[]> {
    return this.httpCli.get<User[]>(this.url);
  }

}
