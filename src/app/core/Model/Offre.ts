import {Type} from "./Type";

export class Offre {
  idOffre: number=0;
  title!: string;
  type!: Type;
  description!: string;
  capacity!: number;
}
