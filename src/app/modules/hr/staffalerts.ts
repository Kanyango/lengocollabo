import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component
({
    selector: 'staffalerts-component',
    templateUrl: 'staffalerts.html'
})

export class StaffAlertsComponent implements OnInit
{   
    alerts = [];
    
    private allAlertsUrl = 'http://localhost:8800/hr/alerts/';
    
    constructor(private http: HttpClient, private route: ActivatedRoute){}
    
    ngOnInit()
    {
        this.http.get<any>(this.allAlertsUrl)
            .subscribe(data => {
            this.alerts = data;
            console.log(data);
        });
    }

}