import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageCardComponent } from "../../components/image-card/image-card.component";
import { TimerComponent } from "../../components/timer/timer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ImageCardComponent, TimerComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
