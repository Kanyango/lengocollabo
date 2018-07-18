import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
    selector: 'newstaffalert-component',
    templateUrl: 'newalert.html'
})

export class NewStaffAlertComponent
{
    staffAlertForm: FormGroup;
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    
    newAlertsUrl = 'http://localhost:8800/hr/alerts/';
    
    constructor(private fb: FormBuilder,private  http: HttpClient,  private route: ActivatedRoute)
    {
        this.createAlertForm();
    }
    
     createAlertForm() 
     {
        this.staffAlertForm = this.fb.group({
              alert_name : ['', Validators.required],
              alert_owner: ['', Validators.required],
              alert_text : ['', Validators.required],
              send_to    : ['', Validators.required]
            });
    }
    
  onSubmit()
  {
    this.saveAlert();
  }
  
  saveAlert()
  {
    this.http.post<any>(this.newAlertsUrl, this.staffAlertForm.value , httpOptions)
        .subscribe(data => {
      console.log(data);
    }); 
  }
 
}