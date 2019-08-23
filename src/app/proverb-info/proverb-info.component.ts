import { Component, OnInit ,  Input } from '@angular/core';
import {  Proverb } from '../proverb'
@Component({
  selector: 'app-proverb-info',
  templateUrl: './proverb-info.component.html',
  styleUrls: ['./proverb-info.component.css']
})
export class ProverbInfoComponent implements OnInit {

  @Input() proverb:Proverb;
  constructor() { }

  ngOnInit() {
  }

}
