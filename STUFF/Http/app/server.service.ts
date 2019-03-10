import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'content-Type': 'application/json'});
   /* return this.http.post('https://suresh-ng-http-fd54b.firebaseio.com/data.json',
      servers, {headers: headers});*/
    return this.http.put('https://suresh-ng-http-fd54b.firebaseio.com/data.json',
      servers, {headers: headers});
  }
  getServers() {
    return this.http.get('https://suresh-ng-http-fd54b.firebaseio.com/data.json');
  }
}
