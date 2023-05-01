import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ComplaintService} from "../services/complaint.service";
import {Router} from "@angular/router";
import {Complaint} from "../core/Model/Complaint";
import Swal from "sweetalert2";
import {ChatBotService} from "../services/chat-bot.service";
import {User} from "../core/Model/User";
import {ChatBotRequest} from "../core/Model/ChatBotRequest";
import {LoginServiceService} from "../services/login-service.service";
import {MailingContent} from "../core/Model/MailingContent";
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() data: any;
  @Input() action: any;

  complaint!: Complaint;
  complaintData = {
    subject: '',
    content: '',
    complaintPar:User,
  };
  message:string='';
  response!: string[];

  messages:string[]=[];
  responses:string[]=[];
  chat:ChatBotRequest[]=[];

  mailingContent= {
    subject:'',
    body:''
  };

  subject:string='';
  body:string='';


  constructor(public activeModal: NgbActiveModal, private complaintService: ComplaintService, private login:LoginServiceService, private chatBotService: ChatBotService, private router: Router, private modalService: NgbModal) {
  }

  // updateComplaint(complaint:any){
  //   this.complaint=data;
  //   this.complaintService.updateComplaint(this.updatedComplaint).subscribe(
  //     (resp) => {
  //       console.log(resp);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  updateComplaint(updatedComplaint: any): void {
    this.data = updatedComplaint;
    this.data.updatedate = new Date();
    this.complaintService.updateComplaint(updatedComplaint, this.data.idComplaint).subscribe();
    this.activeModal.close();
    Swal.fire('', 'Complaint updated succesfully', 'success');

  }


  deleteComplaint(): void {
    this.complaintService.deleteComplaint(this.data).subscribe(() => {
      this.complaintService.getComplaints();
    });
    this.activeModal.close();
    Swal.fire('', 'Complaint deleted succesfully', 'success');

  }


  onSubmit() {
    if (this.complaintData.content.trim() == '' || this.complaintData.content == null || this.complaintData.subject.trim() == '' || this.complaintData.subject == null) {
      Swal.fire('', 'Please fill all fields', 'error');
      return;
    }

    this.complaintData.complaintPar=this.login.getUser();
    this.complaintService.addComplaint(this.complaintData)
      .subscribe();
    Swal.fire('', 'Complaint added succesfully', 'success');
    this.activeModal.close();
  }


  chat3(): void {
    let request:ChatBotRequest = new ChatBotRequest();

    if (this.message!==''){
      this.messages.push(this.message);
      request.message=this.message;
    }


    this.chatBotService.chatWithGpt3(this.message)
      .subscribe(response => {
        this.response=response;
          this.responses.push(response[0]);
          request.response=response[0];
        this.message='';
      });
this.chat.push(request);
  }

  sendMail():void {
    this.mailingContent.body=this.body;
    this.mailingContent.subject=this.subject;
    let mail = new MailingContent(this.subject,this.body);
    this.complaintService.ResolveComplaint(mail,this.data.idComplaint).subscribe();
    this.activeModal.close();
  }
}
