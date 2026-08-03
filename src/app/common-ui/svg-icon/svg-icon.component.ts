import { Component, computed, DOCUMENT, inject, input } from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    styleUrl: './svg-icon.component.scss',
    template: `
        <svg
            class="icon"
            [style.transform]="rotated() ? 'rotate(180deg)' : 'none'"
            [attr.viewBox]="viewBox()"
            aria-hidden="true"
        >
            <use [attr.href]="path()" />
        </svg>
    `
})
export class SvgIconComponent {
    document = inject(DOCUMENT);
    name = input.required<string>();
    viewBox = input<string>('0 0 24 24');
    rotated = input<boolean>(false);

    protected path = computed(() => `${this.document.baseURI}assets/svgs/${this.name()}.svg#${this.name()}`);
}