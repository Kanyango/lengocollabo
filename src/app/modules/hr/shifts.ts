import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component
({
    selector: 'shifts-component',
    templateUrl: 'shifts.html'
})

export class StaffShiftsComponent implements OnInit
{
    
    shifts = [];
    private allShiftsUrl = 'http://localhost:8800/hr/shifts/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute)
    {}
    
    ngOnInit()
    {
        this.http.get<any>(this.allShiftsUrl)
            .subscribe(data => {
            this.shifts = data;
            console.log(data);
    });
    }
    
}