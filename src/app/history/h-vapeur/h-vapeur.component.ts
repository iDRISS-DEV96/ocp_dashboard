import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {Debit} from "../../data-history/debit"

@Component({
  selector: 'app-h-vapeur',
  templateUrl: './h-vapeur.component.html',
  styleUrls: ['./h-vapeur.component.css']
})
export class HVapeurComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    new Chart("h-vapeur", {
      type: 'line',
      data: {
        labels: ["Jan", "Fev", "Mar", "Apr", "May"],
        datasets: [{
          label: 'Unité:t/min',
          data: Debit,
          fill: false,
          borderColor: '#4caf50',
          tension: 0.1,
          backgroundColor: '#4caf50'

        }]
      }, options: {
        responsive: false
      }

    });

  }

}
