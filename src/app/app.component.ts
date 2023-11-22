import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {IProduct} from "./models/product";
import {IPagination} from "./models/pagination";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'client';
  products: IProduct[] = [];

  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:5001/api/products').subscribe((res: IPagination) => {
        this.products = res.data
      }, error => {
        console.log(error)
      })
  }

  ngOnDestroy() {

  }

}
