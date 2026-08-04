import { Component } from '@angular/core';
import { ReturnHeaderComponent } from "../../../common-ui/return-header/return-header.component";
import { TypeGroupComponent } from "./type-group/type-group.component";
import { SourceFooterComponent } from "../../../common-ui/source-footer/source-footer.component";
import { AddNoteComponent } from "../../../common-ui/add-note/add-note.component";
import { CSHARP_INT_TYPES } from './constants/csharp-int-types.const';
import { CSharpTypeGroup } from './interfaces/csharp-type-group.interface';
import { CSHARP_REAL_TYPES } from './constants/csharp-real-types.const';

@Component({
    selector: 'app-type-page',
    imports: [ReturnHeaderComponent, TypeGroupComponent, SourceFooterComponent, AddNoteComponent],
    templateUrl: './type-page.component.html',
    styleUrl: './type-page.component.scss',
})
export class TypePageComponent {
    protected readonly groups: CSharpTypeGroup[] = [CSHARP_INT_TYPES, CSHARP_REAL_TYPES];
}
