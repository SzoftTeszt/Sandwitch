import { map } from "rxjs";
import { BaseService } from "./base.service";

export class Base {
  adatok:any;
  oszlopok:any=[];
  ujAdat:any={};
  mit:string;
  showError:boolean=false;
  errorMessage="";
  constructor(private mivel:string, private base:BaseService){
    this.mit=mivel;
    this.base.getAll(this.mit)?.snapshotChanges().pipe(
      map(ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val()})))
    ).subscribe({
      next:adat=>{this.adatok=adat; console.log(this.adatok)},
      error:err=>{console.log(err.message)}
    }
    )
  }

  addBody(body:any){
    this.base.create(this.mit, body)?.then(()=>console.log("Sikeres felvitel"))
    .catch((err)=>{this.showError=true;this.errorMessage=err})
  }
  updateBody(body:any){
   
  }
  deleteBody(body:any){
  
  }


 
}

