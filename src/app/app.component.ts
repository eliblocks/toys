import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';


export class Toy {
  name: string;
  image: string;
  description: string;
  price: number;
}

// const TOYS: Toy[] = 
const TOYS = [];


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <input [(ngModel)]="searchText" placeholder=" Search toys here">

    <ul class="toys">
      <li *ngFor="let toy of toys | FilterPipe : searchText"
        [class.selected]="toy === selectedToy"
        (click)="onSelect(toy)">
        <img src={{toy.image}}>
        <span class="badge">{{toy.id}}</span> {{toy.name}} - \${{toy.price}}
        <p *ngIf="this.selectedToy === toy;"> {{selectedToy.description}}</p>
      </li>
    </ul>
  `,
  styles: [`
    .toys p {
      width: 400px;
    }
    input {
      width: 400px;
      height: 2em;
      border: 4px solid #369;
    }
  `]
})



export class AppComponent implements OnInit {
  title = 'Toy Store';

  toys = TOYS;
  selectedToy: Toy;

  onSelect(toy: Toy): void {
    if (this.selectedToy === toy) {
      this.selectedToy = null;
    }
    else {
      this.selectedToy = toy;
    }
  }

  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('assets/toys.json').subscribe(data => {
      for (var i=0;i<7;i++) {
        TOYS.push(data[i]);
      }

    });
  }

 
}
