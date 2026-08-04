import { Component, input } from '@angular/core';

@Component({
    selector: 'app-add-note',
    imports: [],
    templateUrl: './add-note.component.html',
    styleUrl: './add-note.component.scss',
})
export class AddNoteComponent {
    name = input.required<string>();
    description = input<string | null>(null);
}
