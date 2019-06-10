import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Email } from './email';

@Injectable()
export class EmailService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  criar(email: Email): Promise<string | Email> {
    return this.http.post(this.taURL + "/email",JSON.stringify(email), {headers: this.headers})
           .toPromise()
           .then(res => {
              if (res.json().success) {return "Sucesso";} else {return null;}
           })
           .catch();
  }
  }