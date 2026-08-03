import { Component, computed, input } from '@angular/core';

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
    name = input.required<string>();
    viewBox = input<string>('0 0 24 24');
    rotated = input<boolean>(false);

    protected path = computed(() => {
        const computedPath = `${document.baseURI}assets/svgs/${this.name()}.svg#${this.name()}`;
        console.log(computedPath);
        return computedPath;
    });
}