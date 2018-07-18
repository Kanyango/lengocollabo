import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
    selector: 'subs-component',
    templateUrl: 'subs.html'
})

export class SubsComponent implements OnInit
{
   subs = [];
   private newSubsUrl = 'http://localhost:8800/subslist/';
    
   constructor(private http: HttpClient){}

    ngOnInit()
    {
         this.http.get<any>(this.newSubsUrl,)
            .subscribe(data => {
            this.subs = data;
            console.log(data);
    });
    }
    
}