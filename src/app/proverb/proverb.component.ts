import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';

@Component({
  selector: 'app-proverb',
  templateUrl: './proverb.component.html',
  styleUrls: ['./proverb.component.css']
})
export class ProverbComponent implements OnInit {
  proverbs:Proverb[] =[
    new Proverb(1,'Dont cry because it is over, smile because it happened.','Dr Seus','Esther',new Date(2019,5,7)),
    new Proverb (2,'Be yourself; everyone else is already taken.','Dr wilde','Ella',new Date(2019,6,8),),
    new Proverb(3,'No one can make you feel inferior without your consent.','Eleanor Roosevelt','Rolly',new Date(2019,6,23)),
  ];
  addNewProverb(proverb){
    let proverbLength = this.proverbs.length;
    proverb.id = proverbLength+1;
    proverb.fullDate = new Date(proverb.fullDate)
    this.proverbs.push(proverb)
  }
  toggleInfo(index){
    this.proverbs[index].ShowAuteur=!this.proverbs[index].ShowAuteur;
  }
 
  proverbDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote : ${this.proverbs[index].nom}?`);

      if (toDelete){
        this.proverbs.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}


