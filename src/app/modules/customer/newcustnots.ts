import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
    selector: 'newcustnots-component',
    templateUrl: 'newcustnots.html'
})

export class NewCustNotComponent
{
    custNotForm: FormGroup;
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    
    newNotsUrl = 'http://localhost:8800/customer/notifications/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute, private fb: FormBuilder)
    {
        this.createNotsForm();
    }
    
     createNotsForm() {
        this.custNotForm = this.fb.group({
              notification_title : ['', Validators.required],
              notification_text : ['', Validators.required],
              send_to  :  ['', Validators.required]
            });
  }
 onSubmit()
  {
    this.saveShift();
  }
  
  saveShift()
  {
    this.http.post<any>(this.newNotsUrl, this.custNotForm.value , httpOptions)
        .subscribe(data => {
      console.log(data);
    }); 
  }


}