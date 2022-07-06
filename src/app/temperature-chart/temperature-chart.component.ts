import {Component} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";
import {IotDataService} from "../services/iot-data.service";

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent {

  view: [number, number];
  data: any[];
  data1: any;
  colorScheme: Color;

  constructor(private iot: IotDataService) {
    this.view = [500, 400];


  }

  public ngOnInit(): void {


    this.iot.getData('temperature').subscribe((data: any) => {
      console.log(data.toString());
      this.data = [
        {
          "name": "Temperature de vapeur",
          "value": data
        }
      ];
      this.data1 = data;
      if (this.data1 > 20 && this.data1 < 124) {
        this.colorScheme = {
          name: 'myScheme',
          selectable: true,
          group: ScaleType.Ordinal,
          domain: ["#5FD068"],
        }

      }
      if (this.data1 >= 124 && this.data1 < 248) {
        this.colorScheme = {
          name: 'myScheme',
          selectable: true,
          group: ScaleType.Ordinal,
          domain: ["#F7EC09"],
        }

      }
      if (this.data1 >= 248 && this.data1 < 496) {
        this.colorScheme = {
          name: 'myScheme',
          selectable: true,
          group: ScaleType.Ordinal,
          domain: ["#c1121f"],
        }
      }

    });
    if (this.data1 === undefined) {
      this.colorScheme = {
        name: 'myScheme',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: ["#5FD068"],
      }
    }
  }


  onSelect(event: Event) {
    console.log(event);
  }
}
