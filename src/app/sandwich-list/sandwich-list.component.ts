import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent {
  sandwiches:any;
  newSandwich:any={}
  constructor(private base:BaseService){
    this.base.getAll().snapshotChanges().pipe(
      map(ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()})))
    ).subscribe({
      next:adat=>{this.sandwiches=adat; console.log(this.sandwiches)},
      error:err=>{console.log(err.message)}
    }
    )
  }

  addSandwich(){
    this.newSandwich.name="Majonézes";
    this.newSandwich.score=10;
    this.base.create(this.newSandwich).then(()=>console.log("Sikeres felvitel"))
    .catch((e)=>console.log(e.message))
  }
}
