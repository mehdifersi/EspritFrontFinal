import {User} from "./User";

export class Interview {
   idInterview!: number
   scheduledTime!: Date;
   dateInterview!: Date;
   heureInterview!: number;
   TotalScore!:number;
   InterviewScore!: number;
   Deliberation!: string;
   evaluator!: User;
   student!:User;

}
