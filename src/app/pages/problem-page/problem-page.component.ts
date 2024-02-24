import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonacoEditorComponent } from "../../components/monaco-editor/monaco-editor.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoComponent } from "../../components/logo/logo.component";
import { faCloudUpload, faEllipsisVertical, faPlay } from '@fortawesome/free-solid-svg-icons';
import { TimerComponent } from "../../components/timer/timer.component";
import Split from 'split-grid';

@Component({
    selector: 'app-problem-page',
    standalone: true,
    templateUrl: './problem-page.component.html',
    styleUrl: './problem-page.component.css',
    imports: [MonacoEditorComponent, TimerComponent,
      FontAwesomeModule, LogoComponent]
})
export class ProblemPageComponent {
  splitIcon = faEllipsisVertical;
  runIcon = faPlay;
  submitIcon = faCloudUpload;

  problemId: string;
  
  constructor(private route: ActivatedRoute) {
    this.problemId = this.route.snapshot.params['id'];
    console.log(this.problemId);
  }
  ngOnInit () {
    Split({
      columnGutters: [{
        track: 1,
        element: document.querySelector('.gutter-col-1') as HTMLElement,
      }],
      onDrag: () => {
        (document.querySelector('.gutter-col-1') as HTMLElement).style.backgroundColor = '#1e90ff';
      },
      onDragEnd: () => {
        (document.querySelector('.gutter-col-1') as HTMLElement).style.backgroundColor = '';
      }
    })
  }
}
