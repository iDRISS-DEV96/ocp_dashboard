import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {Vitesse} from "../../data-history/vitesse"

@Component({
  selector: 'app-h-vitesse',
  templateUrl: './h-vitesse.component.html',
  styleUrls: ['./h-vitesse.component.css']
})
export class HVitesseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    new Chart("h-vit", {
      type: 'line',
      data: {
        labels: ["Jan", "Fev", "Mar", "Apr", "May"],
        datasets: [{
          label: 'Unite:tr/min',
          data: Vitesse,
          fill: false,
          borderColor: '#e91e63',
          tension: 0.1,
          backgroundColor: '#e91e63'

        }]
      }, options: {
        responsive: false
      }

    });
  }

}
