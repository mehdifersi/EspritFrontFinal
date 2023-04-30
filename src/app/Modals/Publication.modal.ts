import { Comment } from "../core/Model/Comment";

export class Publication {
    idPublication!: string; // Clé primaire
    sujet!: string;
    contenu!: string;
    listOfComments!: Comment[];
    ratings!: any;
    reacts!: any;
    signalPosts!:any[]
  }