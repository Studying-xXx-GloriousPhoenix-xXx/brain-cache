import { Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    styleUrl: './svg-icon.component.scss',
    template: `
        <svg [attr.viewBox]="viewBox()" aria-hidden="true">
        <use [attr.href]="path()" />
        </svg>
    `,
})
export class SvgIconComponent {
    name = input.required<string>();
    viewBox = input<string>('0 0 24 24');

    protected path = computed(() => `/assets/svgs/${this.name()}.svg#${this.name()}`);
}