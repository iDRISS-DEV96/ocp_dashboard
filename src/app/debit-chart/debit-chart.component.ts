import {Component, OnInit} from '@angular/core';
import {Chart, ChartDataset, ChartOptions} from "chart.js";
import {IotDataService} from "../services/iot-data.service";
import 'chartjs-adapter-luxon';
import ChartStreaming, {StreamingPlugin,RealTimeScale} from 'chartjs-plugin-streaming';
Chart.register(StreamingPlugin,RealTimeScale);
@Component({
  selector: 'app-debit-chart',
  templateUrl: './debit-chart.component.html',
  styleUrls: ['./debit-chart.component.css']
})

export class DebitChartComponent implements OnInit {
  public options:ChartOptions;

  public datasets: ChartDataset[] = [{
    label: 'Unité: t/min',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgb(84, 186, 185)',
    borderDash: [8, 6],
    fill: false,
    data: []
  }];

  constructor(private iot: IotDataService) {

  }

  ngOnInit(): void {

    this.iot.getData('debit').subscribe((data: any) => {
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
                    y: data.valueOf().value
                  });
                });
              }
            }
          }
        }
      };
    });

  }

}
