import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {
checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
