import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Search } from '../models/search.model';

const API_KEY = 'api_key=52a07df4a2602d1471b670e33ef3bec5';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFilms(search: string) {
    return this.http.get<Search>(`/search/movie?${API_KEY}&query=${search}`);
  }

  getDetails(id: string) {
    return this.http.get<Movie>(`/movie/${id}?${API_KEY}`);
  }

  getLanguage(originalLanguage: string) {
    const languageNames = new Intl.DisplayNames(['es'], {
      type: 'language'
    });
    const language = languageNames.of(originalLanguage);
    if (!language) {
      return originalLanguage;
    }

    return language.charAt(0).toUpperCase() + language.slice(1);
  }

  getImgUrl(imgUrl: string) {
    if (imgUrl) {
      return `https://image.tmdb.org/t/p/w500${imgUrl}`
    }
    return 'https://cdn.pixabay.com/photo/2015/10/31/12/00/question-1015308_1280.jpg';
  }
}
