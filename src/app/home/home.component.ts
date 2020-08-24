import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;

  constructor(
    private service: SubmissionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies = () => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      let language = params.get('language');
      let decadeGTE = params.get('decadeGTE');
      let decadeLTE = params.get('decadeLTE');
      let keyword = params.get('keyword');
      this.service
        .getData(language, decadeGTE, decadeLTE, keyword)
        .subscribe((results) => {
          console.log(results.results);
          this.movies = results.results;
        });
    });
  };
}
