import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';

@Component({
  selector: 'app-proverb',
  templateUrl: './proverb.component.html',
  styleUrls: ['./proverb.component.css']
})
export class ProverbComponent implements OnInit {
  proverbs:Proverb[] =[
    new Proverb('Dont cry because it is over, smile because it happened.','Dr Seus','Esther'),
    new Proverb ('Be yourself; everyone else is already taken.','Dr wilde','Ella'),
    new Proverb('No one can make you feel inferior without your consent.','Eleanor Roosevelt','Rolly'),
  ];
  toggleInfo(index){
    this.proverbs[index].ShowAuteur=!this.proverbs[index].ShowAuteur;
  }
 
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.proverbs[index].nom}?`);

      if (toDelete){
        this.proverbs.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}


