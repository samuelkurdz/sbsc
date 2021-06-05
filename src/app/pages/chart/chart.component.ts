import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Colors, Label, SingleDataSet } from 'ng2-charts';
import { ChartData } from 'src/app/models/general.interface';


interface ChartValueObject {
  balance?: number;
  label: string;
  spent?: number;
  active?: number;
  'in-use'?: number;
}

interface ColorValueObject {
  dataCardColor: string;
  fullCardBgColor: string;
  totalColor: string;
  balanceColor: string;
  textColor: string;
}
@Component({
  selector: 'sbsc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  // inputs
  @Input() chart: ChartData = {};
  @Input() colors: ColorValueObject = {
    dataCardColor: '',
    fullCardBgColor: '',
    totalColor: '',
    balanceColor: '',
    textColor: ''
  };

  // Doughnut settings
  options = {
    cutoutPercentage: 80,
    layout: {
      padding: 10
    },
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
    //   text: '',
    //   display: true,
    // }
  };
  chartColors = [
    {
      backgroundColor: [''],
    },
  ];
  doughnutChartLabels: string[] = [];
  doughnutChartData: number[] = [];
  doughnutChartType: ChartType = 'doughnut';

  // variables
  chartTitle: string = '';
  overall = {
    title: '',
    value: 0
  };

  used = {
    title: '',
    value: 0
  }

  balance = {
    title: '',
    value: 0
  };
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    if (changes.chart) {
      let currentValue: ChartValueObject = changes.chart.currentValue;
      for (const [key, value] of Object.entries(currentValue)) {
        if (key !== 'label') {
          this.doughnutChartLabels.push(key);
          this.doughnutChartData.push(value);
        }
      }
    }

    if (changes.colors) {
      console.log()
      let colors: ColorValueObject = changes.colors.currentValue;
      this.chartColors[0].backgroundColor = [];
      this.chartColors[0].backgroundColor = [colors.totalColor, colors.balanceColor];
    }

    this.used = {
      title: this.doughnutChartLabels[0],
      value: this.doughnutChartData[0]
    }
    this.balance = {
      title: this.doughnutChartLabels[1],
      value: this.doughnutChartData[1]
    }

  }

}
