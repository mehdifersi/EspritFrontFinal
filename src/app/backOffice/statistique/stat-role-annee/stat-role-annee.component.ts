import {Component, OnInit} from '@angular/core';
import {ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle} from "ng-apexcharts";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-stat-role-annee',
  templateUrl: './stat-role-annee.component.html',
  styleUrls: ['./stat-role-annee.component.css']
})
export class StatRoleAnneeComponent implements OnInit {
  student23: number[] = [];
  teacher23: number[] = [];
  admin23: number[] = [];

  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.statistique("student","annee_inscription").subscribe(
      (data:number[])=> {

        for (const num of data) {
          this.student23.push(num);
        }
        // this.student23=data
      })
    console.log(this.student23)
    this.userService.statistique("teacher","annee_inscription").subscribe(
      (data:number[])=>{

        for (const num of data) {
          this.teacher23.push(num);
        }
        // this.teacher23=data
      })
    this.userService.statistique("admin","annee_inscription").subscribe(
      (data:number[])=>{
        for (const num of data) {
          this.admin23.push(num);
        }
        // this.admin23=data
      })
  }

  chartSeries: ApexNonAxisChartSeries = [this.student23[0], this.teacher23[0], this.admin23[0]];
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Student", "Teacher", "Agent administrative"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Number of inscription In 2023 By role ',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };



}
