import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sbsc-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {
  
  @Input() svgTitle: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
