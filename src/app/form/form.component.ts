import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newProverb = new Proverb ("","","",new Date());
  constructor() { }

  ngOnInit() {
  }

}
