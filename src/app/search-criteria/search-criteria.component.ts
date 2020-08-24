import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  keywords: any;

  constructor(private service: SubmissionService) {}

  ngOnInit(): void {}
  getKeywords = (form: NgForm) => {
    let keyword = form.value.keyword.trim().toLowerCase();
    this.service.getKeywords(keyword).subscribe((response) => {
      console.log(response);
      this.keywords = response.results;
    });
  };
}
