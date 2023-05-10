import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import { Sandwitch } from './sandwich';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  ref:AngularFireList<Sandwitch>
  constructor(private db: AngularFireDatabase) {
    this.ref=db.list('/sandwich');
   }

   getAll(){
    return this.ref;
   }

   create(body:any){
    return this.ref.push(body);
   }
}
