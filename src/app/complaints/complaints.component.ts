import {Component} from '@angular/core';
import {Complaint} from '../core/Model/Complaint';
import {Status} from '../core/Model/Status';
import {ComplaintService} from "../services/complaint.service";
import {Router} from "@angular/router";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Chart} from 'chart.js';

import Swal from "sweetalert2";
import {ModalComponent} from "../modal/modal.component";
import {User} from "../core/Model/User";
import {ChatBotService} from "../services/chat-bot.service";
import {MailingContent} from "../core/Model/MailingContent";


@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent {

  complaints!: Complaint[];
  // @ts-ignore
  complaint: Complaint = new Complaint();

  modalData: any;
  action: any;

  detailsComplaint?: Complaint;
  complaintData = {
    subject: '',
    content: '',
    complaintPar:User,
  };

  selectedOption: Status=Status.ACTION;

  chart?: any;
  years: number[] = [2021, 2022, 2023];
  selectedYear:any=2023;
  complaintsFor2023: number=1;
  complaintsPending: number=0;
  complaintsResolved: number=0;
  complaintsInvestigating: number=0;
  complaintsRejected:number=0;

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  complaintshit: number[] = [];


  constructor(private complaintService: ComplaintService,private chatBotService :ChatBotService,private router: Router, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getComplaints();
    this.complaintService.getComplaints().subscribe(
      (complaints: Complaint[]) => {
        this.complaints = complaints;

        // Calculate the number of complaints per month
        for (let i = 0; i < 12; i++) {
          const monthComplaints = this.complaints.filter(complaint => new Date(complaint.date).getMonth() === i);
          this.complaintshit.push(monthComplaints.length);
        }

        // Create the line chart
        this.createLineChart();
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnChanges() {
    this.getComplaints();
    this.calculateComplaintsFor2023();

  }



  getComplaints(): void {
    this.complaintService.getComplaints()
      .subscribe((complaints => {
        this.complaints = complaints;
        this.showChart2();
        this.calculateComplaintsFor2023();

      }))
  }



  public showDetails(idReclamation: number) {
    this.complaintService.OnDetailsComplaint(idReclamation).subscribe(
      (response: Complaint) => {
        console.log(response);
      });
  }


  /// stats

  calculateComplaintsFor2023() {
    this.complaintsFor2023 = this.complaints.length;
    this.complaintsPending=this.complaints.filter(complaint => complaint.status === Status.PENDING).length;
    this.complaintsInvestigating=this.complaints.filter(complaint => complaint.status === Status.INVESTIGATING).length;
    this.complaintsResolved=this.complaints.filter(complaint => complaint.status === Status.RESOLVED).length;
    this.complaintsRejected = this.complaints.filter(complaint => complaint.status === Status.REJECTED).length;
  }
  public showChart2() {
    if (!this.complaints) {
      return;
    }

    let complaintsOfYear = this.complaints;
    if (this.selectedYear === '2023') {
      complaintsOfYear = complaintsOfYear.filter(complaint => complaint.date.getFullYear() === this.selectedYear);
    }
    let pending = complaintsOfYear.filter(complaint => complaint.status === Status.PENDING).length;
    let investigating = complaintsOfYear.filter(complaint => complaint.status === Status.INVESTIGATING).length;
    let rejected = complaintsOfYear.filter(complaint => complaint.status === Status.REJECTED).length;
    let resolved = complaintsOfYear.filter(complaint => complaint.status === Status.RESOLVED).length;


    this.chart = new Chart('chart2', {
      type: 'pie',
      data: {
        labels: ['Pending', 'Investigating', 'Rejected', 'Resolved'],
        datasets: [{
          label: '# of Complaints',
          data: [pending, investigating, rejected, resolved],
          backgroundColor: [
            'rgba(244, 155, 31, 0.81)',
            'rgba(27, 117, 218, 0.74)',
            'rgba(217, 26, 26, 0.74)',
            'rgba(26, 217, 75, 0.74)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.7)',
            'rgba(255, 255, 255, 0.7)'
          ],

          borderWidth: 3
        }]
      }, options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });

  }

  createLineChart(): void {
    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [
          {
            label:'complaints',
            data: this.complaintshit,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension:0
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        },
        plugins: {
          title: {
            display: false,
            text: 'Number of Complaints per Month'
          }
        }
      }
    });

  }


  /// modal

  openModal(complaint:any,action:any) {
    const modalRef = this.modalService.open(ModalComponent);
    this.modalData = complaint;
    modalRef.componentInstance.data = this.modalData;
    modalRef.componentInstance.action = action;

  }

  onModalClosed() {
    this.modalData = null;
  }

  public onOpenModal(complaint: Complaint, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode == 'details'){
      this.detailsComplaint = complaint;
      button.setAttribute('data-target', '#productDetailsModal');
    }
    container?.appendChild(button);
    button.click();
  }



  ///  add and submit


  onSubmit() {

    if(this.complaintData.content.trim() == '' || this.complaintData.content == null ||this.complaintData.subject.trim() == '' || this.complaintData.subject == null ) {
      Swal.fire('', 'Please fill all fields', 'error');
      return;}

    this.complaintService.addComplaint(this.complaintData)
      .subscribe();
    Swal.fire('', 'Complaint added succesfully', 'success');
    this.getComplaints();
  }


  onSelect(complaint:Complaint):void{
    if (this.selectedOption!==Status.ACTION)
    {
      complaint.status=this.selectedOption;
      this.complaintService.updateComplaintStatus(complaint.idComplaint,this.selectedOption).subscribe();
      this.selectedOption=Status.ACTION;
      Swal.fire('', 'Complaint updated succesfully', 'success');
    }
  }

}

