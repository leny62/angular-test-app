import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.themoviedb.org';

  constructor() {}

  async fetchData(): Promise<any> {
    // Fetch data using the Fetch API.
    try {
      const response = await fetch(
        `${this.baseUrl}/3/trending/movie/day?language=en-US`,
        {
          headers: {
            'content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWI2NjRjNGY2MzRhOTdjMzg3ZTU0NjQ3M2YzMjYyMCIsInN1YiI6IjYzZDAyMTRlOTE3NDViMDA4NWRhMjYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BKlHvydZBMvwDe9jM2MbguROoebciiXtdQXixMszKYk',
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      // Handle errors here.
      console.error('Fetch API Error:', error);
      throw error;
    }
  }

  async fetchMovieDetails(id: number): Promise<any> {
    try {
      const response = await fetch(
        `${this.baseUrl}/3/movie/${id}?language=en-US`,
        {
          headers: {
            'content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOWI2NjRjNGY2MzRhOTdjMzg3ZTU0NjQ3M2YzMjYyMCIsInN1YiI6IjYzZDAyMTRlOTE3NDViMDA4NWRhMjYxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BKlHvydZBMvwDe9jM2MbguROoebciiXtdQXixMszKYk',
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      // Handle errors here.
      console.error('Fetch API Error:', error);
      throw error;
    }
  }
}
