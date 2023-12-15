import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/3/trending/movie/day?language=en-US`);
  }

  fetchMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/3/movie/${id}?language=en-US`);
  }
}
