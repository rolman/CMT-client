import {Injectable} from '@angular/core';

import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Consultant} from '../../consultant';
import {HttpResponse} from 'selenium-webdriver/http';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {pipe} from 'rxjs/util/pipe';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {toPromise} from 'rxjs/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ConsultantService {
  public API = environment.apiUrl;
  public CONSULTANT_API = this.API + 'consultants';

  constructor(private http: HttpClient) { }

  public getAllConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(this.CONSULTANT_API);
  }

  public createConsultant(consultant: Consultant): Observable<Consultant> {
    return this.http.post<Consultant>(this.CONSULTANT_API, consultant, httpOptions);
  }

  public getConsultantById (consultant: Consultant): Observable<Consultant>  {
    return this.http.get<Consultant>(this.CONSULTANT_API + '/' + consultant.id);
  }

  public updateConsultant (consultant: Consultant, id: number): Observable<Consultant> {
    console.log(this.CONSULTANT_API + '/' + id);
    return this.http.put<Consultant>(this.CONSULTANT_API + '/' + id, consultant);
  }

  public deleteConsultantById (consultant: Consultant, id: number) {
    console.log('Consultant id : ' + id);
    return this.http.delete<Consultant>(this.CONSULTANT_API + '/' + id);
  }
 /* getAllConsultants(): Observable<Consultant[]> {
    return this.http.get<Consultant[]>(this.CONSULTANT_API);
  }

  get(id: string) {
    return this.http.get<Consultant[]>(this.CONSULTANT_API + '/' + id);
  }

  addConsultant (consultant: Consultant): Observable<any> {
    return this.http.post<Consultant>(this.CONSULTANT_API, JSON.stringify(consultant), httpOptions)
      .pipe(catchError(val => of(`I caught: ${val}`))
        );
  }

  updateConsultant (id: String, consultant: Consultant): Observable<any>{
    return this.http.put<Consultant>(this.CONSULTANT_API + '/' + id, JSON.stringify(consultant), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(val => of(`I caught: ${val}`))
    );
  }*/
/*
  save (consultant: any): Observable<any> {
    let result: Observable<Object>;
    if (consultant['href']) {
      result = this.http.put(consultant.href, consultant);
    } else {
      result = this.http.post(this.CONSULTANT_API, consultant);
    }
    return result;
  }
*/
  remove (href: string) {
    return this.http.delete(href);
  }

}
