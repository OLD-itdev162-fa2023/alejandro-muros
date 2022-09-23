import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  weatherForecasts: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.http.get('http://localhost:5263/weatherforecast').subscribe(
      response =>{ this.weatherForecasts = response; },
      error => { console.log(error) }
    );
  }
}