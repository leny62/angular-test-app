import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private http: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.http
      .fetchData()
      .then((res: any) => {
        this.movies = res.results;
        console.log(this.movies);
      })
      .catch((err) => console.log(err));
  }

  getImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return `${baseUrl}${posterPath}`;
  }

  displayMovie(id: number): void {
   this.userService.goToOneMovie(id)
  }
}
