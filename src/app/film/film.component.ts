import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../core/models/movie.model';

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent implements OnInit {
  movie: Movie | undefined;
  language: string = '';
  imgUrl: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.movieService.getDetails(id).subscribe((data: Movie) => {
        this.movie = data;
        this.language = this.movieService.getLanguage(this.movie.original_language);
        this.imgUrl = this.movieService.getImgUrl(this.movie.poster_path);
      });
    }
  }  
}