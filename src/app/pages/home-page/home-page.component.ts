import { Component } from '@angular/core';
import { CompassComponent } from "../../common-ui/compass/compass.component";

@Component({
    selector: 'app-home-page',
    imports: [CompassComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
