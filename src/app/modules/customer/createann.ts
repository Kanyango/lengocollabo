import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
    selector: 'createann-component',
    templateUrl: 'createann.html'
})

export class NewAnnComponent
{
    custAnnForm: FormGroup;
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    
    newAnnsUrl = 'http://localhost:8800/customer/announcements/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute, private fb: FormBuilder)
    {
        this.createAnnForm();
    }
    
     createAnnForm() {
        this.custAnnForm = this.fb.group({
              ann_name : ['', Validators.required],
              ann_owner: ['', Validators.required],
              start_date    : ['', Validators.required],
              end_date      : ['', Validators.required],
              campaign_keyword : ['', Validators.required],
              campaign_region  :  ['', Validators.required],
              campaing_shortcode: ['', Validators.required]
            });
  }
  onSubmit()
  {
    this.saveShift();
  }
  
  saveShift()
  {
    this.http.post<any>(this.newAnnsUrl, this.custAnnForm.value , httpOptions)
        .subscribe(data => {
      console.log(data);
    }); 
  }

}