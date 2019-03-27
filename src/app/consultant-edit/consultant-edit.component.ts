import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConsultantService} from '../shared/consultant/consultant.service';
import {Subscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';
import {Consultant} from '../consultant';
import {BusinessUnit} from '../BusinessUnit';
import {Location} from '@angular/common';
import {BusinessUnitService} from '../shared/businessUnit/business-unit.service';

@Component({
  selector: 'app-consultant-edit',
  templateUrl: './consultant-edit.component.html',
  styleUrls: ['./consultant-edit.component.css']
})
export class ConsultantEditComponent implements OnInit, OnDestroy {
  @Input() consultant: Consultant = new class implements Consultant {
    businessUnit: any;
    description: String;
    firstName: String;
    gender: String;
    id: number;
    lastName: String;
  };
  sub: Subscription;

  businessUnits: Array<BusinessUnit>;



  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private consultantService: ConsultantService,
              private businessUnitService: BusinessUnitService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.consultant.id = params['id'];
      this.consultantService.getConsultantById(this.consultant).subscribe(res => {
        this.consultant = res;
      });
    });
    this.businessUnitService.getAllBusinessUnits().toPromise().then(res => {this.businessUnits = res;
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  validateClick() {
    this.router.navigate(['/consultant-page/' + this.consultant.id]);
  }


  updateConsultant(id: number) {
    this.consultantService.updateConsultant(this.consultant, id)
      .subscribe(
        data => {
          this.consultant = data as Consultant;
          this.validateClick();
        },
        error => console.log(error));
  }

  goPlaces() {
    this.router.navigate(['/consultant-list']);
  }
}
