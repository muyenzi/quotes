import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Proverb } from '../proverb';
@Component({
  selector: 'app-proverb-info',
  templateUrl: './proverb-info.component.html',
  styleUrls: ['./proverb-info.component.css']
})
export class ProverbInfoComponent implements OnInit {
 
  @Input() proverbd: Proverb;
  @Output() IsComplete =new EventEmitter<boolean>();
  
  proverbComplete(complete:boolean){
    this.IsComplete .emit(complete);
  }
 
  constructor() { }

  ngOnInit() {
  }

}
