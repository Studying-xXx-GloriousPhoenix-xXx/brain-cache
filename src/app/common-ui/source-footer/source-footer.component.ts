import { Component, input } from '@angular/core';

@Component({
    selector: 'app-source-footer',
    template: '<p class="text">Based on {{source()}}</p>',
    styleUrl: './source-footer.component.scss',
})
export class SourceFooterComponent {
    source = input.required<string>();
}
