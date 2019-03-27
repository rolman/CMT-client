import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Consultant} from '../consultant';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultantService} from '../shared/consultant/consultant.service';
import {BusinessUnit} from '../BusinessUnit';
import {Location} from '@angular/common';
import {BusinessUnitService} from '../shared/businessUnit/business-unit.service';

@Component({
  selector: 'app-consultant-add',
  templateUrl: './consultant-add.component.html',
  styleUrls: ['./consultant-add.component.css']
})
export class ConsultantAddComponent implements OnInit, OnDestroy {
  @Input() consultant: Consultant = new class implements Consultant {
    businessUnit: any;
    description: String;
    firstName: String;
    gender: String;
    id: number;
    lastName: String;
  };

  businessUnits: Array<BusinessUnit>;

  sub: Subscription;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private consultantService: ConsultantService,
              private businessUnitService: BusinessUnitService) {
  }

  ngOnInit() {
    this.businessUnitService.getAllBusinessUnits().toPromise().then(res => {this.businessUnits = res; });
  }

  createConsultant(consultantToCreate: Consultant) {
    this.consultantService.createConsultant(this.consultant)
      .toPromise().then(
        data => {
          this.consultant = data as Consultant;
          this.router.navigate(['/consultant-list']);
        },
        error => console.log(error));
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  backClicked() {
    this.location.back();
  }

}
