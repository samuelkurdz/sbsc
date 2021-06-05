import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Colors, Label, SingleDataSet } from 'ng2-charts';
import { ChartData } from 'src/app/models/general.interface';

@Component({
  selector: 'sbsc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() title: string = '';
  @Input() total: number = 0;
  @Input() balance: number = 0;
  @Input() chart: ChartData = {};
  @Input() fullardBgColor: string = '';
  @Input() dataCardColor: string = '';
  @Input() totalColor: string = '';
  @Input() balanceColor: string = '';

    // Doughnut
    options: ChartOptions = {
      cutoutPercentage: 80,
      legend: {
        display: false,
      },
      tooltips: {
        displayColors: false,
      },
      elements: {
        arc: {
          borderWidth: 0,
        }
      },
      // title: {
      //   text: 'knslknegklnlknlkgn',
      //   display: true,
      // }
    };
    chartColors: Array<Colors> = [
      {
        backgroundColor: ["#FF6542", '#F8E9E2'],
      },
    ];
    doughnutChartLabels: Label[] = [
      'Spent',
      'Balance',
    ];
    doughnutChartData: SingleDataSet = [60, 40];
    doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit(): void {
  }

}
