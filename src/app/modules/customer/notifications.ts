import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'custnotifications-component',
    templateUrl: 'notifications.html'
})

export class CustomerNotificationsComponent implements OnInit
{

    notifications = [];
    private allNotsUrl = 'http://localhost:8800/customer/notifications/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute)
    {}
    
    ngOnInit()
    {
        this.http.get<any>(this.allNotsUrl)
            .subscribe(data => {
            this.notifications = data;
            console.log(data);
    });
    }
}