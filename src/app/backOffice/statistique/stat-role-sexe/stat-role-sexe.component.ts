import {Component, OnInit} from '@angular/core';
import {ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle} from "ng-apexcharts";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-stat-role-sexe',
  templateUrl: './stat-role-sexe.component.html',
  styleUrls: ['./stat-role-sexe.component.css']
})
export class StatRoleSexeComponent implements OnInit {

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Apple", "Microsoft", "Facebook", "Google"];

  chartTitle: ApexTitleSubtitle = {
    text: 'number of inscription  by role and by sex',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
  }
}
