import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Joke {
  id: string;
  value: string;
  created_at: string;
  icon_url: string;
  url: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public joke: Observable<Joke>;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.joke = this.apiService.getJoke();
  }
}
