import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent {

@Input() adatok:any;
@Input() oszlopok:any;
@Input() showError?:boolean;
@Input() errorMessage?:string;

@Output() create: EventEmitter<any> = new EventEmitter();
@Output() update: EventEmitter<any> = new EventEmitter();
@Output() delete: EventEmitter<any> = new EventEmitter();

onCreate(body:any){
  this.create.emit(body);
}
onUpdate(body:any){
  this.update.emit(body);
}
onDelete(body:any){
  this.delete.emit(body);
}

}
