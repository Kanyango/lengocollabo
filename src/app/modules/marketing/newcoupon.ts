import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'newcoupon-component',
    templateUrl: 'newcoupon.html'
})

export class NewCouponComponent
{
    couponForm: FormGroup;
    date = '';
    mode ='date';
    firstDayOfWeek = 0;
    constructor(
    private fb: FormBuilder)
    {
        this.createCouponForm();
    }
    
     createCouponForm() {
        this.couponForm = this.fb.group({
              campaign_name : ['', Validators.required],
              campaign_owner: ['', Validators.required],
              start_date    : ['', Validators.required],
              end_date      : ['', Validators.required],
              campaign_keyword : ['', Validators.required],
              campaign_region  :  ['', Validators.required],
              campaing_shortcode: ['', Validators.required]
            });
  }
  onSubmit()
  {}

}