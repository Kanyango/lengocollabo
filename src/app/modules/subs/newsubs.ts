import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
    selector: 'newsubs-component',
    templateUrl: 'newsubs.html'
})

export class NewSubsComponent
{
    newSubsForm: FormGroup;
    
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    private newSubsUrl = 'http://localhost:8800/subslist/';
    
    constructor(private http: HttpClient, private fb: FormBuilder)
    {
        this.createSubsForm();
    }
    
     createSubsForm() {
        this.newSubsForm = this.fb.group({
              subs_name : ['', Validators.required],
              //subs_file: ['', Validators.required]
            });
  }
  onSubmit()
  {
    this.addSubs();
  }
  
  addSubs () {
    console.log(this.newSubsForm.value);
    
     this.http.post<any>(this.newSubsUrl, this.newSubsForm.value , httpOptions)
        .subscribe(data => {
      console.log(data);
    });
  }
  
  private handleError<T>(operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
    }
  }
  
  private log(message: string) {
    console.log(message);
  }

}