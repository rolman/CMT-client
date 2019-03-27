import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../Mission';
import {Consultant} from '../consultant';
import {ActivatedRoute, Router} from '@angular/router';
import {MissionsAndStatsService} from '../shared/missionsAndStats/missions-and-stats.service';
import {ConsultantService} from '../shared/consultant/consultant.service';

@Component({
  selector: 'app-consultant-mission-create',
  templateUrl: './consultant-mission-create.component.html',
  styleUrls: ['./consultant-mission-create.component.css']
})
export class ConsultantMissionCreateComponent implements OnInit {

  @Input() mission: Mission = new class implements Mission {
    endDate: String;
    id: number;
    missionDescription: String;
    missionName: String;
    startDate: String;
    tjm: number;
  };

  consultant: Consultant = new class implements Consultant {
    businessUnit: String;
    description: String;
    firstName: String;
    gender: String;
    id: number;
    lastName: String;
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private missionAndStatsService: MissionsAndStatsService,
              private consultantService: ConsultantService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.consultant.id = params['id'];
      });
  }

  createMission(missionToCreate: Mission) {
    this.missionAndStatsService.createMission(this.consultant, this.mission).toPromise().then(data => {
      this.mission = data as Mission;
      this.router.navigate(['/consultant-page/' + this.consultant.id]);
    });
  }

  validateClick() {
    this.router.navigate(['/consultant-page/' + this.consultant.id]);
  }


}
