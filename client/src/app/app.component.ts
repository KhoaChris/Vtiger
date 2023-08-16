import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Md5 } from 'ts-md5'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  md5 = new Md5();

  constructor(private http: HttpClient){

    this.http.get("http://localhost:3000/calculate/10/30").subscribe((data) => {
      console.log(data);
    } )
  }

}
