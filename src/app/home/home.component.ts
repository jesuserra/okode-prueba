import { Component } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../core/models/movie.model';
import { Search } from '../core/models/search.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: Movie[] = [];
  search = '';

  constructor(private movieService: MovieService) { }

  onSubmit(search: string): void {
    this.movieService.getFilms(search).subscribe((response: Search) => {
      this.movies = response.results;
    });
  }
}
