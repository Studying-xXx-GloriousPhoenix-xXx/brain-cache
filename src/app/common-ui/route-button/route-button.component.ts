import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-route-button',
    template: `<span class="text">{{ text() }}</span>`,
    styleUrl: './route-button.component.scss',
    hostDirectives: [
        {
            directive: RouterLink,
            inputs: ['routerLink: link']
        }
    ]
  })
export class RouteButtonComponent {
    text = input.required<string>();
    link = input.required<string | any[]>();
}
