import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Proverb } from '../proverb';
@Component({
  selector: 'app-proverb-info',
  templateUrl: './proverb-info.component.html',
  styleUrls: ['./proverb-info.component.css']
})
export class ProverbInfoComponent implements OnInit {
 
  @Input() proverbd: Proverb;
  @Output() isComplete =new EventEmitter<boolean>();
  
  proverbDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
