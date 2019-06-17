import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Emailtolist } from './emailtolist';

@Injectable()
export class EmailListService {

       private headers = new Headers({ 'Content-Type': 'application/json' });
       private taURL = 'http://localhost:3000';

       constructor(private http: Http) { }

       getList(): Promise<Emailtolist[]> {
              return this.http.get(this.taURL + "/emaillist")
                     .toPromise()
                     .then(res => {
                            console.log(res.json());
                            return res.json();
                     })
                     .catch();
       }

       deleteEmail(id): Promise<string> {
              console.log(id);
              return this.http.post(this.taURL + "/emaildelete", JSON.stringify(id), { headers: this.headers })
                     .toPromise()
                     .then(res => {
                            return JSON.stringify(id);
                     })
                     .catch();




       }
}