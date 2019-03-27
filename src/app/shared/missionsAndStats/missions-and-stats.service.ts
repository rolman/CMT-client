import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consultant} from '../../consultant';
import {Observable} from 'rxjs/Observable';
import {Mission} from '../../Mission';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class MissionsAndStatsService {
  public API = environment.apiUrl;
  public CONSULTANT_API = this.API + 'consultants';

  constructor(private http: HttpClient) { }

  public getAllConsultantMissions(consultant: Consultant): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.CONSULTANT_API + '/' + consultant.id + '/missions');
  }

  public getMissionById(consultant: Consultant, mission: Mission): Observable<Mission> {
    return this.http.get<Mission>(this.CONSULTANT_API + '/' + consultant.id + '/missions/' + mission.id);
  }

  public createMission(consultant: Consultant, mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(this.CONSULTANT_API + '/' + consultant.id + '/missions', mission, httpOptions);
  }

  public updateMission(consultant: Consultant, mission: Mission): Observable<Mission> {
    return this.http.put<Mission>(this.CONSULTANT_API + '/' + consultant.id + '/missions/' + mission.id, mission);
  }

  public deleteMissionsById(consultant: Consultant, mission: Mission) {
    console.log('Delete Mission :  ' + this.CONSULTANT_API + '/' + consultant.id + '/missions/' + mission.id);
    return this.http.delete<Mission>(this.CONSULTANT_API + '/' + consultant.id + '/missions/' + mission.id).toPromise()
      .then(() => console.log('Ok'));
  }
}
