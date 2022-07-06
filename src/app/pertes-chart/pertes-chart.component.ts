import {Component, OnInit} from '@angular/core';
import {Chart, ChartDataset, ChartOptions} from "chart.js";
import {IotDataService} from "../services/iot-data.service";
import 'chartjs-adapter-luxon';
import ChartStreaming, {StreamingPlugin, RealTimeScale} from 'chartjs-plugin-streaming';

Chart.register(StreamingPlugin, RealTimeScale);

@Component({
  selector: 'app-pertes-chart',
  templateUrl: './pertes-chart.component.html',
  styleUrls: ['./pertes-chart.component.css']
})
export class PertesChartComponent implements OnInit {
  public options: ChartOptions;

  public datasets: ChartDataset[] = [{
    label: 'Unité: mmH2O',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 91, 0,0.8)',
    // borderDash: [8, 6],
    fill: false,
    data: []
  }];

  constructor(private iot: IotDataService) {

  }

  ngOnInit(): void {
    this.iot.getData('pertes').subscribe((data: any) => {
      this.options = {
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              delay: 2000,
              onRefresh: (chart: Chart) => {
                chart.data.datasets.forEach((dataset: ChartDataset) => {
                  dataset.data.push({
                    x: Date.now(),
                    y: data
                  });
                });
              }
            }
          }, y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      };
    });


  }
}
