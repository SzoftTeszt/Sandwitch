import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';
import { Base } from '../base';

@Component({
  selector: 'app-sandwich-list',
  templateUrl: './sandwich-list.component.html',
  styleUrls: ['./sandwich-list.component.css']
})
export class SandwichListComponent  extends Base{

  constructor(base:BaseService) {
    super("Sandwich", base);
  }
  
}
