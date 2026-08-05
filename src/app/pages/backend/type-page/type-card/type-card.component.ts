import { Component, computed, input, signal } from '@angular/core';
import { CSharpType } from '../interfaces/csharp-type.interface';

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

    protected readonly layoutOrder = computed(() => {
        const memory = this.data().memory;
        if (!memory) return '';
        return memory.layout.map(seg => `[${seg.kind}: ${seg.bits}]`).join(' ');
    });
}
