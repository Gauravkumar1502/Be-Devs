import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesDown, faAnglesUp, faBullseye, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

export interface Question {
  status: string;
  id: number;
  questionTitle: string;
  difficulty: string;
}

@Component({
  selector: 'app-problems-page',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatSortModule, RouterModule,
    MatFormFieldModule, MatTooltipModule, FormsModule, ReactiveFormsModule],
  templateUrl: './problems-page.component.html',
  styleUrl: './problems-page.component.css'
})
export class ProblemsPageComponent {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  isCollapsed = true;
  faAngleUp = faAnglesUp;
  faAngleDown = faAnglesDown;
  faStatus = faCheckCircle;
  arrowPosition: 'before' | 'after';

  questions: Question[] = [
    {
      status: 'Solved',
      id: 1,
      questionTitle: 'Two Sum',
      difficulty: 'Easy'
    },
    {
      status: 'Unsolved',
      id: 2,
      questionTitle: 'Add Two Numbers',
      difficulty: 'Medium'
    },
    {
      status: 'Solved',
      id: 3,
      questionTitle: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium'
    },
    {
      status: 'Unsolved',
      id: 4,
      questionTitle: 'Median of Two Sorted Arrays',
      difficulty: 'Hard'
    },
    {
      status: 'Attempted',
      id: 5,
      questionTitle: 'Longest Palindromic Substring',
      difficulty: 'Medium'
    }
  ];

  sortedQuestions: Question[];

  constructor() {
    this.sortedQuestions = this.questions.slice();
    this.arrowPosition = 'before';
  }

  sortData(sort: Sort) {
    console.log(sort);
    const data = this.questions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedQuestions = data;
      return;
    }
    console.log(sort);
    this.sortedQuestions = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'status': return compare(a.status, b.status, isAsc);
        case 'id': return compare(a.id, b.id, isAsc);
        case 'questionTitle': return compare(a.questionTitle, b.questionTitle, isAsc);
        case 'difficulty': return compare(a.difficulty, b.difficulty, isAsc);
        default: return 0;
      }
    });
  }
  getStatusIcon(status: string) {
    return status === 'Solved' ? faCheckCircle : faBullseye;
  }
  getColor(difficulty: string) {
    switch (difficulty) {
      case 'Easy':
        return 'var(--success)';
      case 'Medium':
        return 'var(--warning)';
      case 'Hard':
        return 'var(--danger)';
      default:
        return 'var(--info)';
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
