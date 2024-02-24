import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-problem-page',
  standalone: true,
  imports: [],
  templateUrl: './problem-page.component.html',
  styleUrl: './problem-page.component.css'
})
export class ProblemPageComponent {
  problemId: string;

  constructor(private route: ActivatedRoute) {
    this.problemId = this.route.snapshot.params['id'];
    console.log(this.problemId);
  }
}
