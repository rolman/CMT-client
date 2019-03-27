import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import {ConsultantService} from './shared/consultant/consultant.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatRadioModule, MatSelectModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ConsultantEditComponent } from './consultant-edit/consultant-edit.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ConsultantAddComponent } from './consultant-add/consultant-add.component';
import { ConsultantPageComponent } from './consultant-page/consultant-page.component';
import {BusinessUnitService} from './shared/businessUnit/business-unit.service';
import { BusinessUnitAddComponent } from './business-unit-add/business-unit-add.component';
import { BusinessUnitListComponent } from './business-unit-list/business-unit-list.component';
import { BusinessUnitDeleteComponent } from './business-unit-delete/business-unit-delete.component';
import { BusinessUnitPageComponent } from './business-unit-page/business-unit-page.component';
import { ConsultantMissionsAndStatsComponent } from './consultant-missions-and-stats/consultant-missions-and-stats.component';
import {MissionsAndStatsService} from './shared/missionsAndStats/missions-and-stats.service';
import { ConsultantMissionEditComponent } from './consultant-mission-edit/consultant-mission-edit.component';
import { ConsultantMissionCreateComponent } from './consultant-mission-create/consultant-mission-create.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/consultant-list', pathMatch: 'full'},
  {
    path: 'consultant-list',
    component: ConsultantListComponent
  },
  {
    path: 'consultant-add',
    component: ConsultantAddComponent
  },
  {
    path: 'consultant-edit/:id',
    component: ConsultantEditComponent
  },
  {
    path: 'consultant-page/:id',
    component: ConsultantPageComponent
  },
  {
    path: 'consultant-page/:id/missions',
    component: ConsultantMissionsAndStatsComponent
  },
  {
    path: 'businessUnit-add',
    component: BusinessUnitAddComponent
  },
  {
    path: 'consultant-page/:id/missions/:missionId',
    component: ConsultantMissionEditComponent
  },
  {
    path: 'consultant-page/:id/mission-create',
    component: ConsultantMissionCreateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ConsultantListComponent,
    ConsultantEditComponent,
    ConsultantAddComponent,
    ConsultantPageComponent,
    BusinessUnitAddComponent,
    BusinessUnitListComponent,
    BusinessUnitDeleteComponent,
    BusinessUnitPageComponent,
    ConsultantMissionsAndStatsComponent,
    ConsultantMissionEditComponent,
    ConsultantMissionCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ConsultantService,
    BusinessUnitService,
    MissionsAndStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
