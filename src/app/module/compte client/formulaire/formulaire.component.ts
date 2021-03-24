import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../model/client'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  prenom : string = "";
  nom : string = "";
  email : string = "";
  ville : string = "";
  adresse : string = "";
  codepostal : string = "";
  username : string = "";
  password : string = "";
  confirmpassword : string = "";
  civilite : string = "";
  telephone : string = "";
  validation : boolean = false;
  longueur : number = 0;

  data : Client = new Client();

  constructor() { }

  ngOnInit(): void {
  }

  clearForm(){
    this.prenom = "";
    this.nom = "";
    this.telephone = "";
    this.civilite = "";
    this.email = "";
    this.ville = "";
    this.adresse = "";
    this.codepostal = "";
    this.password = "";
    this.confirmpassword = "";
    this.username = "";
  }

  valider() {
    this.longueur = this.password.length;
    if (this.password != this.confirmpassword) {
      alert("Les mots de passe ne correspondent pas");
    } else if (this.longueur < 8) {
      alert("Le mot de passe doit faire 8 caractères minimum.")
    } else {
      this.validation = true;
      alert("Formulaire complet.");
      this.data.adresse = this.adresse;
      this.data.codepostal = this.codepostal;
      this.data.email = this.email;
      this.data.nom = this.nom;
      this.data.prenom = this.prenom;
      this.data.ville = this.ville;
      this.data.password = this.password;
      this.data.telephone = this.telephone;
      this.data.username = this.username;
      this.data.civilite = this.civilite;
      this.clearForm();
      console.log(this.data);

    }
  }
}
