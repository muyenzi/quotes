import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Proverb } from '../proverb';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() addProverb = new EventEmitter<Proverb>();
  newProverb = new Proverb (0,"","","",new Date());
  postProverb(){
    this.addProverb.emit(this.newProverb);
      }
  constructor() { }

  ngOnInit() {
  }

}
