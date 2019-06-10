import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Form } from './form'

@Injectable()
export class CheckService {
    private headers = new Headers({'content-type': 'application/json'});
    private taURL = 'http://localhost:3000';

    constructor(private http: Http) { }

    checkIn(form: Form): Promise<Form> {
        return this.http.put(this.taURL + "/check", JSON.stringify(form), {headers: this.headers})
            .toPromise()
            .then( res => {
                if (res.json().sucess) { return form;}
                else if (res.json().fail) {
                    return null;
                }
            })
    }

    checkIn2(form: Form): Promise<Form> {
        return this.http.post(this.taURL + "/check", JSON.stringify(form), {headers: this.headers})
            .toPromise()
            .then( res => {
                if (res.json().sucess) { return form;}
                else if (res.json().fail) {
                    return null;
                }
            })
    }
    
}