import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'announcements-component',
    templateUrl: 'announcements.html'
})

export class AnnouncementsComponent implements OnInit
{

    anns = [];
    private allAnnsUrl = 'http://localhost:8800/customer/announcements/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute)
    {}
    
    ngOnInit()
    {
        this.http.get<any>(this.allAnnsUrl)
            .subscribe(data => {
            this.anns = data;
            console.log(data);
    });
    }
}