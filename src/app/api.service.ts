import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './app.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getJoke(): Observable<Joke> {
    return this.http.get<Joke>('https://norrisapp71.herokuapp.com/joke');
  }
}
