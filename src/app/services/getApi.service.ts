import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  private BASE_URL = 'https://api.apilayer.com/currency_data/convert';
  private API_KEY = "626Nnjj44V9d3n3CLlnqApWgCOrbElM7";

  constructor(private http: HttpClient) { }

  getCurrency (values: {valueFrom: number, selectFrom: string,valueTo: number, selectTo: string}) {
    // if (values.selectFrom && )
    const options = {
      headers: new HttpHeaders({
        "apikey": this.API_KEY,
      }),

      params: new HttpParams()
      .set('from',  values.selectFrom)
      .set('to',  values.selectTo)
      .set ('amount', values.valueFrom),

    }
    return this.http.get(this.BASE_URL, options)
  }
}
