import { Component, input, signal } from '@angular/core';
import { TypeCardComponent } from "../type-card/type-card.component";
import { CSharpTypeGroup } from '../interfaces/c-sharp-type-group.interface';
import { SvgIconComponent } from "../../../../common-ui/svg-icon/svg-icon.component";

@Component({
    selector: 'app-type-group',
    imports: [TypeCardComponent, SvgIconComponent],
    templateUrl: './type-group.component.html',
    styleUrl: './type-group.component.scss',
})
export class TypeGroupComponent {
    group = input.required<CSharpTypeGroup>();
    protected isHidden = signal<boolean>(true);
    protected toggleShow() {
        this.isHidden.update(v => !v);
    }
}
