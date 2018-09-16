import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {
  data :any;
  
  constructor() {
    this.data = [
      {
        user: 1,
        usename: "Dharmender",
        email: "dharmender@gmail.com"
      },
      {
        user: 2,
        username: "aman",
        email: "aman@gmail.com"
      }
    ];
   }
}
