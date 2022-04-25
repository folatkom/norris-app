import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export interface Episodes {
  info: Info;
  results: Episode[];
}
interface Info {
  count: string;
  pages: number;
  next: string;
  prev: string;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: string;
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface Origin {
  name: string;
  url: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public seasons = ['season 1', 'season 2', 'season 3', 'season 4', 'season 5'];
  public chosen = false;
  public episodes: Observable<Episode[]>;
  constructor(private apiService: ApiService) {}
  chooseSeason(id: number) {
    this.chosen = true;
    this.episodes = this.apiService.getSeason(id);
  }
}
