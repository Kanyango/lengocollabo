import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
    selector: 'collab-component',
    templateUrl: 'collab.html'
})

export class CollaborationComponent implements OnInit
{

    doing = [];
    done = [];
    todo = [];
    
    simpleDrop: any;
    
    allTaskUrl = 'http://localhost:8800/customer/tasks/';
    
    constructor(private http: HttpClient, private route: ActivatedRoute){}
    
    ngOnInit()
    {
        this.http.get<any>(this.allTaskUrl)
            .subscribe(data => {
            this.done = data;
            console.log(data);
    });
    }
    
    addTodo($event: any)
    {
        let newProduct = $event.dragData;
        this.todo.push(newProduct);
        
        var index = this.doing.indexOf(newProduct);
        console.log('Iam the index', index);
        
        if (index > -1) {
          this.doing.splice(index, 1);
        }
        console.log(newProduct);
    }
    
    addDoing($event: any)
    {
        let newProduct = $event.dragData;
        this.doing.push(newProduct);
        
    
    }
}