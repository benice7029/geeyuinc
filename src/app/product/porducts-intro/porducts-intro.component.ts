import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motors } from '../model/Motors';

@Component({
  selector: 'app-porducts-intro',
  templateUrl: './porducts-intro.component.html',
  styleUrls: ['./porducts-intro.component.scss']
})
export class PorductsIntroComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get<Motors[]>('http://localhost:8080/api/searchProducts')
    // .subscribe(
    //   (value: Motors[]) => {
    //     console.log(value);
    //   }
    // )
  }

}
