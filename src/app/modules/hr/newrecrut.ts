import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'newrecruit-component',
    templateUrl: 'newrecruit.html'
})

export class NewRecruitComponent
{
    recruitForm: FormGroup;
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    
    constructor(private http: HttpClient,  private route: ActivatedRoute, private fb: FormBuilder)
    {
        this.createRecruitForm();
    }
    
     createRecruitForm() 
     {
        this.recruitForm = this.fb.group({
              
              text      :  ['', Validators.required],
              send_to   :  ['', Validators.required]
              
            });
    }
  
  onSubmit()
  {}

}