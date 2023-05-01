export class MailingContent{


  id!:number;
  toEmail!:string;
  subject!:string;
  body!:string

  constructor(subject: string,body:string) {
    this.body='';
    this.subject=subject;
    this.body=body;
  }
}
