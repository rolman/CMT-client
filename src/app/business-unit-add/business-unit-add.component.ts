import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BusinessUnitService} from '../shared/businessUnit/business-unit.service';
import {BusinessUnit} from '../BusinessUnit';

@Component({
  selector: 'app-business-unit-add',
  templateUrl: './business-unit-add.component.html',
  styleUrls: ['./business-unit-add.component.css']
})
export class BusinessUnitAddComponent implements OnInit {

  businessUnit: BusinessUnit = new class implements BusinessUnit {
    name: String;
    value: String;
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private businessUnitService: BusinessUnitService) {
  }

  ngOnInit() {
  }

  createBusinessUnit(businessUnit: BusinessUnit) {
    this.businessUnitService.createBusinessUnit(this.businessUnit).toPromise()
      .then(data => {
        console.log('data : ' + data);
        this.businessUnit = data as BusinessUnit;
        this.router.navigate(['/consultant-list']);
      });
  }

}
