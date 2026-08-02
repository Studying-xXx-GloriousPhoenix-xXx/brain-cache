import { Component, inject, input } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-return-header',
    imports: [SvgIconComponent, RouterLink],
    templateUrl: './return-header.component.html',
    styleUrl: './return-header.component.scss',
})
export class ReturnHeaderComponent {
    private readonly location = inject(Location);

    name = input.required<string>();

    protected goBack() {
        this.location.back();
    }
}
