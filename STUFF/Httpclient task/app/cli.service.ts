import {Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User} from './user.model';
import { Observable} from 'rxjs/index';

@Injectable()
export class CliService {
    private url = 'http://172.104.6.14:3000/api/Cities';
    constructor(private httpCli: HttpClient) {}
    getData(): Observable<User[]> {
        return this.httpCli.get<User[]>(this.url);
    }
    /*exampleData() {
        let request = this.httpCli.get('http://172.104.6.14:3000/api/Customers');
        return request.toPromise();
    /!*    console.log(request);*!/
    }*/
    exampleData(): Observable<User[]> {
        return this.httpCli.get<User[]>('http://172.104.6.14:3000/api/Customers');
    }
}