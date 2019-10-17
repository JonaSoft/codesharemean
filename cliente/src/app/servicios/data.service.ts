import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Flights } from '../models/flights';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  selectedFlight:Flights;
  flights:Flights[]

  URL_API = 'http://localhost:3000/';
 
  constructor(private http:HttpClient) {
    this.selectedFlight = new Flights
   }
   getFlights(){
    return this.http.get(this.URL_API)
  }
  
  postFlight(flight:Flights){
    return this.http.post(this.URL_API,flight)
  }
  
  putFlight(flight:Flights){
    return this.http.put(this.URL_API + `/${flight._id}`,flight);
  }

  deleteFlight(_id:String){
    return this.http.delete(this.URL_API + `/${_id}`)
  }

}
