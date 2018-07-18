import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'campaigns-component',
    templateUrl: 'campaigns.html'
})

export class CampaignComponent implements OnInit
{
    campaigns = [];
    
    private allCampsUrl = 'http://localhost:8800/marketing/campaigns/';
    
    constructor(private http: HttpClient,  private route: ActivatedRoute){}
    
    ngOnInit()
    {
        this.http.get<any>(this.allCampsUrl)
            .subscribe(data => {
            this.campaigns = data;
            console.log(data);
    });
    }
}