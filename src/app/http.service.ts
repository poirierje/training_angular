import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _httpClient: HttpClient ) { }

  browseSites() {
    return this._httpClient.get('http://localhost:3000/sites');
  }
}
 