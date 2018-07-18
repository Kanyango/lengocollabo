import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from "angular-file-uploader";
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'subcontacts-component',
    templateUrl: 'sub_contacts.html'
})

export class SubContactsComponent implements OnInit
{

   id = '';
   counter = 0;
   subs = [];
   //@ViewChild('fileUpload1');
   afuConfig = {};
   
   //private fileUpload1:  AngularFileUploaderComponent;
   
   closeResult: string;
   
    resetUpload = true;
    
   private newSubsUrl = 'http://localhost:8800/subslist/';
    
   constructor(private http: HttpClient,  private route: ActivatedRoute, private el: ElementRef){}
   
   ngOnInit()
   {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
   }
   
   
  upload() {
        const URL = `${this.newSubsUrl}${this.id}/`;
    //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#excelfile');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('photo', inputEl.files.item(0));
            //call the angular http method
          
            this.counter = 60;
            //setTimeout(function(){
                    
                    this.http.put(URL, formData)
                      .subscribe(data => {
                        console.log(data);
                      })
          
                }
           // }, 3000)
            
       }
   
   private handleError(error: any)
   {
    console.error('An error occurred', error); // for demo purposes only
    
  }
  
}