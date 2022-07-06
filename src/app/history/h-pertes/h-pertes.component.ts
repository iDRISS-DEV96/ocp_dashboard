import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {Pertes} from "../../data-history/pertes"

@Component({
  selector: 'app-h-pertes',
  templateUrl: './h-pertes.component.html',
  styleUrls: ['./h-pertes.component.css']
})
export class HPertesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    new Chart("h-pertes", {
      type: 'line',
      data: {
        labels: ["Jan", "Fev", "Mar", "Apr", "May"],
        datasets: [{
          label: 'Unité de pression:mmH2O',
          data: Pertes,
          fill: false,
          borderColor: 'rgb(243, 36, 36)',
          tension: 0.1,
          backgroundColor: 'rgb(243, 36, 36)'

        }]
      }, options: {
        responsive: false
      }

    });


  }

}
