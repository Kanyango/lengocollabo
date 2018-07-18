import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './modules/dashboard/dash';
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
import { NewStaffSurveyComponent } from './modules/hr/newstaffsurvey';
import { StaffSurveyComponent } from './modules/hr/staffsurvey';
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

const routes: Routes = [
               {path: '', redirectTo: 'dash', pathMatch: 'full'}, 
               { path: 'dash', component: DashComponent },
               { path: 'leadgens', component: LeadGensComponent },
               { path: 'newleadscampaign', component: NewLeadComponent },
               { path: 'allleads', component: LeadsComponent },
               { path: 'leadsurveys', component: LeadSurveyComponent },
               { path: 'newleadsurvey', component: NewLeadSurveyComponent },
               { path: 'customersurveys', component: CustomerSurveysComponent },
               { path: 'newcustomersurvey', component: NewCustomerSurveyComponent },
               { path: 'customer/notifications', component: CustomerNotificationsComponent },
               { path: 'new/customer/notifications', component: NewCustNotComponent },
               { path: 'customer/announcements', component: AnnouncementsComponent },
               { path: 'customer/new/announcement', component: NewAnnComponent },
               { path: 'marketing/surveys', component: MarketingSurveysComponent },
               { path: 'marketing/new/survey', component: NewMarketSurveyComponent },
               { path: 'marketing/leadcapture', component: LeadCaptureComponent },
               { path: 'marketing/newleadcapture', component: NewLeadCaptureComponent },
               { path: 'marketing/coupons', component: MarketingCouponsComponent },
               { path: 'marketing/newcoupons', component: NewCouponComponent },
               { path: 'staff/survey', component: StaffSurveyComponent },
               { path: 'staff/new/survey', component: NewStaffSurveyComponent },
               { path: 'staff/alerts', component: StaffAlertsComponent },
               { path: 'staff/new/alerts', component: NewStaffAlertComponent },
               { path: 'staff/recruitment', component: RecruitingComponent },
               { path: 'staff/new/recruitment', component: NewRecruitComponent },
               { path: 'tasks', component: CollaborationComponent },
               { path: 'subslist', component: SubsComponent },
               { path: 'newsubslist', component: NewSubsComponent },
               { path: 'contacts/:id', component: SubContactsComponent },
               { path: 'shifts', component: StaffShiftsComponent },
               { path: 'new/shifts', component: NewShiftsComponent },
               { path: 'campaigns', component: CampaignComponent },
               { path: 'newcamps', component: NewCampsComponent }
 
                      
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
