import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule }   from '@angular/router';
//import { HttpModule }    from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import {
    FormsModule,
    FormGroup,
    FormControl
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFileUploaderModule  } from "angular-file-uploader";
import { FileUploadModule } from 'ng2-file-upload';

import {SuiModule} from 'ng2-semantic-ui';
import { DndModule } from 'ng2-dnd';

import { AppRoutingModule }   from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './modules/dashboard/dash';
import { NavbarComponent } from './modules/navbar/nav';
import { ListingComponent } from './modules/utilities/listing';
import { LeadGensComponent } from './modules/sales/leadgen/leadgens';
import { NewLeadComponent } from './modules/sales/leadgen/newleadcamp';
import { LeadsComponent } from './modules/sales/leadgen/leads';
import { LeadSurveyComponent } from './modules/sales/leadsurvey/leadsurvey';
import { NewLeadSurveyComponent } from './modules/sales/leadsurvey/newleadsurvey';
import { CustomerSurveysComponent } from './modules/customer/customersurveys';
import { NewCustomerSurveyComponent } from './modules/customer/newcustsurvey';
import { CustomerNotificationsComponent } from './modules/customer/notifications';
import { NewCustNotComponent } from './modules/customer/newcustnots';
import { AnnouncementsComponent } from './modules/customer/announcements';
import { NewAnnComponent } from './modules/customer/createann';
import { MarketingSurveysComponent } from './modules/marketing/marksurvey';
import { NewMarketSurveyComponent } from './modules/marketing/newmarksurvey';
import { LeadCaptureComponent } from './modules/marketing/leadcapture';
import { NewLeadCaptureComponent } from './modules/marketing/newcapture';
import { MarketingCouponsComponent } from './modules/marketing/coupons';
import { NewCouponComponent } from './modules/marketing/newcoupon';
import { StaffSurveyComponent } from './modules/hr/staffsurvey';
//import { StaffSurveyComponent } from './modules/hr/staffsurvey';
import { NewStaffSurveyComponent } from './modules/hr/newstaffsurvey';
import { StaffAlertsComponent } from './modules/hr/staffalerts';
import { NewStaffAlertComponent } from './modules/hr/newalert';
import { RecruitingComponent } from './modules/hr/recruiting';
import { NewRecruitComponent } from './modules/hr/newrecrut';
import { CollaborationComponent } from './modules/collaboration/collab';
import { SubsComponent } from './modules/subs/subs';
import { NewSubsComponent } from './modules/subs/newsubs';
import { SubContactsComponent } from './modules/subs/sub_contacts';
import { StaffShiftsComponent } from './modules/hr/shifts';
import { NewShiftsComponent } from './modules/hr/newshifts';
import { CampaignComponent } from './modules/marketing/campaigns/campaigns';
import { NewCampsComponent } from './modules/marketing/campaigns/newcamps';
import { NewTaskComponent } from './modules/collaboration/newtask';

@NgModule({
  declarations: 
  [
    AppComponent,
    DashComponent,
    NavbarComponent,
    ListingComponent,
    LeadGensComponent,
    NewLeadComponent,
    LeadsComponent,
    LeadSurveyComponent,
    NewLeadSurveyComponent,
    CustomerSurveysComponent,
    NewCustomerSurveyComponent,
    CustomerNotificationsComponent,
    NewCustNotComponent,
    AnnouncementsComponent,
    NewAnnComponent,
    MarketingSurveysComponent,
    NewMarketSurveyComponent,
    LeadCaptureComponent,
    NewLeadCaptureComponent,
    MarketingCouponsComponent,
    NewCouponComponent,
    StaffSurveyComponent,
    NewStaffSurveyComponent,
    StaffAlertsComponent,
    NewStaffAlertComponent,
    RecruitingComponent,
    NewRecruitComponent,
    CollaborationComponent,
    SubsComponent,
    NewSubsComponent,
    SubContactsComponent,
    StaffShiftsComponent,
    NewShiftsComponent,
    CampaignComponent,
    NewCampsComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SuiModule,
    DndModule.forRoot(),
    NgbModule.forRoot(),
    FileUploadModule,
    AngularFileUploaderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
