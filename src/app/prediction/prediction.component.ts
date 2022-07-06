import {Component, OnInit} from '@angular/core';
import {AIserviceService} from "../services/aiservice.service";
import {Chart, ChartDataset, ChartOptions} from "chart.js";
import ChartStreaming, {StreamingPlugin, RealTimeScale} from 'chartjs-plugin-streaming';

Chart.register(StreamingPlugin, RealTimeScale);

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})


export class PredictionComponent implements OnInit {
  public options: ChartOptions;

  public datasets: ChartDataset[] = [
    {
      label: 'la valeur de puissance  Unité: Mw/s',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 91, 0,0.8)',
      // borderDash: [8, 6],
      fill: false,
      data: []
    }, {
      label: 'la valeur estimée Unité: Mw/s',
      backgroundColor: 'rgba(36, 47, 155,0.5)',
      borderColor: 'rgba(36, 47, 155)',
      borderDash: [8, 6],
      fill: false,
      data: []
    }
  ];

  constructor(private ai: AIserviceService) {
  }


  ngOnInit(): void {
    this.ai.getData('prediction').subscribe((data: any) => {
      console.log("data" + this.datasets[0]["data"]);
      this.options = {
        scales: {
          x: {
            type: 'realtime',
            realtime: {
              delay: 2000,
              onRefresh: (chart) => {
                chart.data.datasets.forEach((element, index) => {
                  console.log("arrray" + element, index);

                  this.datasets[index]["data"].push({
                    x: Date.now(),
                    y: data[index],
                  });
                });
              }
            }
          },

        }
      };
    });


  }

}
