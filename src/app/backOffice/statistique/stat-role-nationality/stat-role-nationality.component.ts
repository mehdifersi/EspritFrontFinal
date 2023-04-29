import {Component, OnInit} from '@angular/core';
import {ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle} from "ng-apexcharts";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-stat-role-nationality',
  templateUrl: './stat-role-nationality.component.html',
  styleUrls: ['./stat-role-nationality.component.css']
})
export class StatRoleNationalityComponent implements OnInit {

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

  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
  }
}
