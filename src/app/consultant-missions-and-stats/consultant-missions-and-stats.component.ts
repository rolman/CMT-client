import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultantService} from '../shared/consultant/consultant.service';
import {BusinessUnitService} from '../shared/businessUnit/business-unit.service';
import {Consultant} from '../consultant';
import {MissionsAndStatsService} from '../shared/missionsAndStats/missions-and-stats.service';
import {Mission} from '../Mission';

@Component({
  selector: 'app-consultant-missions-and-stats',
  templateUrl: './consultant-missions-and-stats.component.html',
  styleUrls: ['./consultant-missions-and-stats.component.css']
})
export class ConsultantMissionsAndStatsComponent implements OnInit {
  @Input() consultant: Consultant = new class implements Consultant {
    businessUnit: String;
    description: String;
    firstName: String;
    gender: String;
    id: number;
    lastName: String;
  };

  missions: Array<Mission>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private consultantService: ConsultantService,
              private  businessUnitService: BusinessUnitService,
              private missionsAndStatsService: MissionsAndStatsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.consultant.id = params['id'];
      this.consultantService.getConsultantById(this.consultant).subscribe(res => {
        this.consultant = res;
        console.log(this.consultant.id);
      });
    });
    this.missionsAndStatsService.getAllConsultantMissions(this.consultant).toPromise().then(res => {this.missions = res;
    console.log ('Missions : ' + this.missions[0]); });

  }

  deleteMission(consultant: Consultant, mission: Mission, listId: number) {
    this.missionsAndStatsService.deleteMissionsById(consultant, mission)
      .then(() => this.missions.splice(listId, 1));
  }

}
