import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageCardComponent } from "../../components/image-card/image-card.component";
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [ImageCardComponent, LogoComponent, RouterModule, LogoComponent]
})
export class LandingPageComponent {

}
