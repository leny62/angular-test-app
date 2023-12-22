import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: any;

  constructor(private http: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id') as string;
    this.onMovieDetails(parseInt(movieId));
  }

  getImageUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return `${baseUrl}${posterPath}`;
  }

  onMovieDetails(movieId: number): void {
    this.http.fetchMovieDetails(movieId).subscribe(
      (res: any) => {
        this.movie = res;
        console.log(this.movie);
      },
      (err: any) => console.log(err)
    );
  }

  getCompanyLogoUrl(logoPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w200';
    return `${baseUrl}${logoPath}`;
  }
}
