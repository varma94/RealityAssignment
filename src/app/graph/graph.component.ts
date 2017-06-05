import {Component, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']


})
export class GraphComponent implements OnChanges{

  @Input('xValue')
  xValue = '';
  @Input('yValue')
  yValue= '';
  reading = 0;
  editColId: number;
  editRowId: number;
  newValue: any;
 // lineChart

  ngOnChanges(change:SimpleChanges){
    console.log("changed");
  }

  public lineChartLabels: Array<any> = [];
  public lineChartData: Array<any> = [
    {data: [], label: '1st number series'},
    {data: [], label: '2nd number series'},
  ];

  public lineChartOptions: any = {
    allowPointSelect: true,
    responsive: true,
  };
  public getlineChartData() {
    return this.lineChartData;
  }

  public getlineChartLabels() {
    return this.lineChartLabels;
  }
updateData() {
  const _lineChartDatanew: Array<any> = this.lineChartData.slice();
  this.lineChartData = _lineChartDatanew;
}
  addData() {
    console.log(this.xValue);
    const _lineChartData: Array<any> = this.lineChartData.slice();
    _lineChartData[0].data.push(this.xValue);
    _lineChartData[1].data.push(this.yValue);
    this.reading = this.reading + 1;
    this.lineChartLabels.push(this.reading);
    this.lineChartData = _lineChartData;
  }
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
