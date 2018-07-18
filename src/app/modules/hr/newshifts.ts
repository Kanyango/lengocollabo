import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
    selector: 'newrecruit-component',
    templateUrl: 'newshifts.html'
})

export class NewShiftsComponent
{
    shiftsForm: FormGroup;
    date = '';
    mode ='date';
    mode2 = 'time';
    firstDayOfWeek = 0;
    newShiftsUrl = 'http://localhost:8800/hr/shifts/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute, private fb: FormBuilder)
    {
        this.createShiftForm();
    }
    
     createShiftForm() 
     {
        this.shiftsForm = this.fb.group({
              shift_job      : ['', Validators.required],
              shift_duration : ['', Validators.required],
              start_date     : ['', Validators.required],
              start_time     : ['', Validators.required],
              description    : ['', Validators.required],
              send_to        : ['', Validators.required]

            });
    }
  
  onSubmit()
  {
    this.saveShift();
  }
  
  saveShift()
  {
    this.http.post<any>(this.newShiftsUrl, this.shiftsForm.value , httpOptions)
        .subscribe(data => {
      console.log(data);
    }); 
  }
}