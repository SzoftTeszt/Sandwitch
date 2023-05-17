import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/compat/database';
import { Sandwitch } from './sandwich';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refSandwich:AngularFireList<Sandwitch>
  refDrink:AngularFireList<Sandwitch>
  constructor(private db: AngularFireDatabase) {
    this.refSandwich=db.list('/sandwich');
    this.refDrink=db.list('/drink');
   }

   getAll(mit:string){
    if (mit=="Sandwich") return this.refSandwich;
    if (mit=="Drink") return this.refDrink;
    return null;
   }

   create(mit:string, body:any){
    if (mit=="Sandwich")return this.refSandwich.push(body);
    if (mit=="Drink")return this.refDrink.push(body);
    return null;
   }
}
