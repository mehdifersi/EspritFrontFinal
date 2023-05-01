import {User} from "./User";
import {Status} from "./Status";


export class Complaint {
  idComplaint: number;
  content: string;
  subject: string;
  status: Status;
  date: Date;
  updatedate: Date;
  complaintPar: User;

  constructor(id: number , content: string, subject: string ,user: User) {

    this.idComplaint = id;
    this.content = content;
    this.subject = subject;
    this.status = Status.PENDING;
    this.date = new Date();
    this.updatedate = new Date();
    this.complaintPar = user;
  }
}
