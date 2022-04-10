import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './app.component';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getJoke(): Observable<Joke> {
    return this.http.get<Joke>(
      'https://cors-anywhere.herokuapp.com/https://norrisapp71.herokuapp.com/joke'
    );
  }
}
