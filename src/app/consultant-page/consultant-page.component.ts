import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultantService} from '../shared/consultant/consultant.service';
import {Consultant} from '../consultant';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
import {BusinessUnitService} from '../shared/businessUnit/business-unit.service';
import {BusinessUnit} from '../BusinessUnit';

@Component({
  selector: 'app-consultant-page',
  templateUrl: './consultant-page.component.html',
  styleUrls: ['./consultant-page.component.css']
})
export class ConsultantPageComponent implements OnInit {
  @Input() consultant: Consultant = new class implements Consultant {
    businessUnit: String;
    description: String;
    firstName: String;
    gender: String;
    id: number;
    lastName: String;
  };
  sub: Subscription;

  businessUnit: BusinessUnit = new class implements BusinessUnit {
    name: String;
    value: String;
    id: number;
  };

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private consultantService: ConsultantService,
              private  businessUnitService: BusinessUnitService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.consultant.id = params['id'];
      this.consultantService.getConsultantById(this.consultant).subscribe(res => {
        this.consultant = res;
        console.log(this.consultant.id);
      });
    });
  }

  actionClick() {
    this.router.navigate(['/consultant-list']);
  }

  async deleteConsultant(id: number) {
    await this.consultantService.deleteConsultantById(this.consultant, this.consultant.id)
      .toPromise().then(() => this.router.navigate(['/consultant-list']));
  }

}
