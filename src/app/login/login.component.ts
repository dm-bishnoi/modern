import { Component, OnInit } from '@angular/core';
import { FetchdataService } from "../fetchdata.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submit:any;

  constructor( private _fetchData: FetchdataService ) { 
  }
    ngOnInit() {
      console.log(this._fetchData.data);
  } 

 
  
}
