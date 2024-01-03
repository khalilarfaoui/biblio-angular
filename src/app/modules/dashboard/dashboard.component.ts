import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { EmpruntService } from 'src/app/services/emprunts.service';
import { LivresService } from 'src/app/services/livres.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  labelPie: any = []
  arrayOfValues: any = []
  countLibreByFormatdata: any
  countLibreByGenredata : any
  allLivres:any
  allEmprunt : any
  allUsers : any
  constructor(
    private livreService: LivresService,
    private empruntService : EmpruntService,
    private userService : UsersService
    
  ) { }
  ngOnInit(): void {
    this.livreService.get().subscribe(res1=>{
      this.allLivres = res1
    })
    this.empruntService.get().subscribe(res2=>{
      this.allEmprunt = res2
    })
    this.userService.get().subscribe(res3=>{
      this.allUsers = res3
    })
    this.livreService.countLibreByGenre().subscribe(res => {
      console.log(Object.keys(res)[0]);
      this.countLibreByGenredata = res
      this.arrayOfValues = Object.values(this.countLibreByGenredata);
      this.labelPie = Object.keys(this.countLibreByGenredata);
      console.log(this.arrayOfValues)
      const myPie = new Chart("myPie", {
        type: 'pie',
        data: {
          labels: this.labelPie,
          datasets: [{
            label: 'My First Dataset',
            data: this.arrayOfValues,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        }
      })
    })
    this.livreService.countLibreByFormat().subscribe(ress => {
      this.countLibreByFormatdata = ress
      const data = Object.keys(this.countLibreByFormatdata)
      const value = Object.values(this.countLibreByFormatdata)
      Chart.register(...registerables);
      const myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: data,

          datasets: [{
            label: 'Votes',
            data: value,
            backgroundColor: [
              "#1775a3"
            ],
            borderColor: [
              '#1775a3',
            ],
            borderWidth: 1,

            barPercentage: 0.7,
            barThickness: 30,
            borderRadius: 8,
          }]
        },
        options: {
          scales: {
            y: {
              title: {
                display: false,
              },
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              padding: 20,
              color: 'black',
              text: 'Books By Format Livre',
              font: {
                size: 16,
              },
              align: 'start',
            },
          },
        },

      });

    })

  }
}
