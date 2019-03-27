import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Consultant} from '../../consultant';
import {BusinessUnit} from '../../BusinessUnit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class BusinessUnitService {

  public API = environment.apiUrl;
  public BU_API = this.API + 'businessUnits';

  constructor(private http: HttpClient) { }

  public getAllBusinessUnits(): Observable<BusinessUnit[]> {
    return this.http.get<BusinessUnit[]>(this.BU_API);
  }
/*
  public getBusinessUnitsById(consultant: Consultant): Observable<BusinessUnit> {
    return this.http.get<BusinessUnit>(this.BU_API + '/' + consultant.id;
  }
  */

  public createBusinessUnit(businessUnit: BusinessUnit): Observable<BusinessUnit> {
    return this.http.post<BusinessUnit>(this.BU_API, businessUnit, httpOptions);
  }

}
