import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';

@Component({
  selector: 'app-proverb',
  templateUrl: './proverb.component.html',
  styleUrls: ['./proverb.component.css']
})
export class ProverbComponent implements OnInit {
  proverbs:Proverb[] =[
    {nom:'Dont cry because it is over, smile because it happened.',auteur:'Dr Seus',soumission:'Esther'},
    {nom:'Be yourself; everyone else is already taken.',auteur:'Dr wilde',soumission:'Ella'},
    {nom:'No one can make you feel inferior without your consent.',auteur:'Eleanor Roosevelt',soumission:'Rolly'},
  ];

  constructor() { }

  ngOnInit() {
  }

}


