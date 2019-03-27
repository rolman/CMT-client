import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../Mission';
import {ActivatedRoute, Router} from '@angular/router';
import {MissionsAndStatsService} from '../shared/missionsAndStats/missions-and-stats.service';
import {ConsultantService} from '../shared/consultant/consultant.service';
import {Consultant} from '../consultant';

@Component({
  selector: 'app-consultant-mission-edit',
  templateUrl: './consultant-mission-edit.component.html',
  styleUrls: ['./consultant-mission-edit.component.css']
})
export class ConsultantMissionEditComponent implements OnInit {
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
        console.log('ok');
        this.mission.id = params['missionId'];
        this.consultant.id = params['id'];
        this.consultantService.getConsultantById(this.consultant).toPromise().then(
          res => {
            this.consultant = res;
            this.missionAndStatsService.getMissionById(this.consultant, this.mission).toPromise().then(
              resMission => this.mission = resMission
            );
        });
    });
  }

  updateMission(mission: Mission) {
    this.missionAndStatsService.updateMission(this.consultant, mission)
      .subscribe(
        data => {
          this.mission = data as Mission;
          this.validateClick();
        },
        error => console.log(error));
  }

  validateClick() {
    this.router.navigate(['/consultant-page/' + this.consultant.id]);
  }

}
