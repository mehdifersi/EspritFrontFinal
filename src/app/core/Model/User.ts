import {Sexe} from "./Sexe";
import {Nationality} from "./Nationality";
import {TypeCours} from "./TypeCours";
import {Role} from "./Role";
import {NiveauActuel} from "./NiveauActuel";
import {NiveauSuivant} from "./NiveauSuivant";

export class User {
  id!: number;
  firstname!: string;
  lastname!: string;
  username!: string;
  email!: string;
  sexe!: Sexe;
  nationality!: Nationality;
  typeCours!: TypeCours;
  password!: string;
  identifiant!: string;
  registrationDate!: Date;
  cin!: string;
  locked: boolean = false;
  enabled: boolean = false;
  role!: Role;
  niveauActuel!: NiveauActuel;
  niveauSuivant!: NiveauSuivant;
  numTel!: string;
}
