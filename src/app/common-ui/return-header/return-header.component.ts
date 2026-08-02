import { Component, inject, input } from '@angular/core';
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-return-header',
    imports: [SvgIconComponent, RouterLink],
    templateUrl: './return-header.component.html',
    styleUrl: './return-header.component.scss',
})
export class ReturnHeaderComponent {
    private readonly location = inject(Location);
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);

    name = input.required<string>();

    protected goBack() {
        if (window.history.length > 1) {
            this.location.back()
        }
        else {
            this.router.navigate(["../"], { relativeTo: this.route });
        }
    }
}
