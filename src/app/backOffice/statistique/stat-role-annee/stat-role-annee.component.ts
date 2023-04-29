import {Component, OnInit} from '@angular/core';
import {ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle} from "ng-apexcharts";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-stat-role-annee',
  templateUrl: './stat-role-annee.component.html',
  styleUrls: ['./stat-role-annee.component.css']
})
export class StatRoleAnneeComponent implements OnInit {
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    this.userService.statistique("student","annee_inscription")
  }
  num!:number[]

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Apple", "Microsoft", "Facebook", "Google"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Leading Companies',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };



}
