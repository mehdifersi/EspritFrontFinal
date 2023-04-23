import {Category} from "./Category";

export class Question {
  id!: number;
  text!: string;
  choices!: string[];
  Correctanswer!: number;
  category!: Category;
}
