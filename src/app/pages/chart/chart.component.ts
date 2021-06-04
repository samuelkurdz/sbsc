import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'src/app/models/general.interface';

@Component({
  selector: 'sbsc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() title: string = '';
  @Input() total: string = '';
  @Input() chart: ChartData = {};
  @Input() fullardBgColor: string = '';
  @Input() dataCardColor: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
