import { Component } from '@angular/core';
import { ReturnHeaderComponent } from '../../../common-ui/return-header/return-header.component';
import { RouteButtonComponent } from '../../../common-ui/route-button/route-button.component';

@Component({
  selector: 'app-backend-page',
  imports: [ReturnHeaderComponent, RouteButtonComponent],
  templateUrl: './backend-page.component.html',
  styleUrl: './backend-page.component.scss',
})
export class BackendPageComponent {}
