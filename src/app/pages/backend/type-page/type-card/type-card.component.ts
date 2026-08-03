import { Component, input, signal } from '@angular/core';
import { CSharpType } from '../interfaces/c-sharp-type.interface';

@Component({
    selector: 'app-type-card',
    imports: [],
    templateUrl: './type-card.component.html',
    styleUrl: './type-card.component.scss',
    host: {
        '[class.signed]': 'data().signed',
        '[class.unsigned]': '!data().signed',
        '[style.flex]': '`1 1 calc(100% / ${partition()} - 1em)`'
    }
})
export class TypeCardComponent {
    data = input.required<CSharpType>();
    partition = input<number, number>(2, {
        transform: (value) => {
            if (value % 1 !== 0 || value < 1) {
                return 2;
            }
            return value;
        }
    });
}
