import {Component} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";
import {IotDataService} from "../services/iot-data.service";

@Component({
  selector: 'app-vitesse-chart',
  templateUrl: './vitesse-chart.component.html',
  styleUrls: ['./vitesse-chart.component.css']
})
export class VitesseChartComponent {

  view: [number, number];
  data: any[];

  constructor(private iot: IotDataService) {
    this.view = [500, 400];


  }

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#1F4690"],
  };


  onSelect(event: Event) {
    console.log(event);
  }

  public ngOnInit(): void {


    this.iot.getData('vitesse').subscribe((data: any) => {
      console.log(data);
      this.data = [
        {
          "name": "Vitesse de van",
          "value": data
        }
      ];

    });


  }


}
