import { Component } from '@angular/core';
import { RouteButtonComponent } from "../../../common-ui/route-button/route-button.component";
import { ReturnHeaderComponent } from "../../../common-ui/return-header/return-header.component";

@Component({
    selector: 'app-tool-page',
    imports: [RouteButtonComponent, ReturnHeaderComponent],
    templateUrl: './tool-page.component.html',
    styleUrl: './tool-page.component.scss',
})
export class ToolPageComponent {}
