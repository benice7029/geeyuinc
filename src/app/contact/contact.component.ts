import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { concat } from './model/concat';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  concatMessage: concat;

  

  constructor(private http: HttpClient, private url: HttpService) { }

  ngOnInit() {
    this.concatMessage = {
      id:null,
      fullName:'',
      email:'',
      telephone:'',
      message:''
    }
  }

  sendMessage(){
    this.http.post('http://localhost:8080/api/newRequest', this.concatMessage)
      .subscribe((response)=>{
        alert(response['result']);
        console.log('repsonse ',response);
    })
  }

}
