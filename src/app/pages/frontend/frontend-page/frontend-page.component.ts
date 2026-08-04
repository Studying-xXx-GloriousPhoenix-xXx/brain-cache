import { Component } from '@angular/core';
import { ReturnHeaderComponent } from "../../../common-ui/return-header/return-header.component";
import { AddNoteComponent } from "../../../common-ui/add-note/add-note.component";

@Component({
    selector: 'app-frontend-page',
    imports: [ReturnHeaderComponent, AddNoteComponent],
    templateUrl: './frontend-page.component.html',
    styleUrl: './frontend-page.component.scss',
})
export class FrontendPageComponent {}
