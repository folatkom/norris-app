import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episodes, Episode, Character } from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getEpisodes(): Observable<Episodes> {
    return this.http.get<Episodes>('https://rickandmortyapi.com/api/episode');
  }
  public getSeason(id): Observable<Episode[]> {
    let episodes: number[] = [];
    switch (id) {
      case 1:
        episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        break;
      case 2:
        episodes = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        break;
      case 3:
        episodes = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        break;
      case 4:
        episodes = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41];
        break;
      case 5:
        episodes = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
        break;
    }
    return this.http.get<Episode[]>(
      `https://rickandmortyapi.com/api/episode/${episodes}`
    );
  }
  // public getCharacters(charId) {
  //   return this.http.get<Character>(`https://rickandmortyapi.com/api/character/
  //   ${charId}`);
  // }
}
