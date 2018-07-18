import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'newtask-component',
  templateUrl: './newtask.html'
})
export class NewTaskComponent {

  closeResult: string;
  newTaskForm: FormGroup;
  date = '';
  mode ='datetime';
  firstDayOfWeek = 0;
    
  newTaskUrl = 'http://localhost:8800/customer/tasks/';
    
  constructor(private modalService: NgbModal,  
              private http: HttpClient,  
              private route: ActivatedRoute, 
              private fb: FormBuilder)
              {
               this.createNewTask()
              }

  createNewTask()
  {
    this.newTaskForm = this.fb.group({
              task_title : ['', Validators.required],
              task_captain : ['', Validators.required],
              start_date    : ['', Validators.required],
              end_date      : ['', Validators.required],
              task_dptmt : ['', Validators.required],
              task_members  :  ['', Validators.required]
            });
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  onSubmit()
  {
    this.saveTasks();
  }
  
  saveTasks()
  {
    this.http.post<any>(this.newTaskUrl, this.newTaskForm.value , httpOptions)
        .subscribe(data => {
      console.log(data);
    }); 
  }
}