import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {Puissance} from "../../data-history/puissance"

@Component({
  selector: 'app-h-puissance',
  templateUrl: './h-puissance.component.html',
  styleUrls: ['./h-puissance.component.css']
})
export class HPuissanceComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    new Chart("h-pui", {
      type: 'line',
      data: {
        labels: ["Jan", "Fev", "Mar", "Apr", "May"],
        datasets: [{
          label: 'Unite:Mw/h',
          data: Puissance,
          fill: false,
          borderColor: 'rgb(47, 164, 255)',
          tension: 0.1,
          backgroundColor: 'rgb(47, 164, 255)'

        }]
      }, options: {
        responsive: false
      }

    });

  }

}
