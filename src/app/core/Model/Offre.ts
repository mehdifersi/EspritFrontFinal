import {Type} from "./Type";

export class Offre {
  idOffre!:number;
  title!: string;
  type!: Type;
  description!: string;
  capacity!: number;
  constructor(title: string, type: Type, description: string, capacity: number) {
    this.title = title;
    this.type = type;
    this.description = description;
    this.capacity = capacity;
  }
}
