import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
                if (!res.json().fail) {
                        form.JSONtoForm(res.json());
                        return form;
                    }
                else {
                    return null;
                }
            })
            .catch(this.ERROR);
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
            .catch(this.ERROR);
    }

    getQuarto(): Promise<[]> {
        alert("getQuarto()")
        return this.http.get(this.taURL + "/quarto")
            .toPromise()
            .then(res => {
                if (!res.json().fail) { 
                    return res.json();
                }
                else if (res.json().fail) {
                    return null;
                }
            } )
    }

    private ERROR(erro: any): Promise<any>{
        console.error('Acesso mal sucedido ao serviço de alunos',erro);
        return Promise.reject(erro.message || erro);
    }
    
}