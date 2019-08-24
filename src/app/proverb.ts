export class Proverb {
    ShowAuteur :boolean;
    constructor(public nom:string,public auteur:string,public soumission:string,public fullDate :Date){
        this.ShowAuteur=false;
    }
}