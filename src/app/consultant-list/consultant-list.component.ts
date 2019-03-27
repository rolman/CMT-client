import { Component, OnInit } from '@angular/core';
import {ConsultantService} from '../shared/consultant/consultant.service';
import {Consultant} from '../consultant';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.css']
})
export class ConsultantListComponent implements OnInit {

  consultants: Array<Consultant>;

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
    this.consultantService.getAllConsultants().toPromise().then(data => {this.consultants = data; });
  }


}
