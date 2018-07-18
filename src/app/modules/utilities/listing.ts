import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'listing-component',
    templateUrl: 'listing.html'
})

export class ListingComponent
{
    @Input() title = '';

}