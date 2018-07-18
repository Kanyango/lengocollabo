import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component
({
    selector   : 'recruiting-component',
    templateUrl: 'recruiting.html'
})

export class RecruitingComponent implements OnInit
{
    
    recruits = [];
    private allRecruitUrl = 'http://localhost:8800/hr/recruit/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute)
    {}
    
    ngOnInit()
    {
        this.http.get<any>(this.allRecruitUrl)
            .subscribe(data => 
            {
                this.recruits = data;
                console.log(data);
            });
    }
    
}