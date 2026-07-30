import { Pipe, PipeTransform } from '@angular/core';
import { LegendTag } from '../interfaces/legend-tag.interface';

@Pipe({
    name: 'legendTag',
})
export class LegendTagPipe implements PipeTransform {
    transform(value: LegendTag): string {
        if (value === 'legacy') return 'System.Collections';
        if (value === 'memory') return 'System (Span/Memory)';
        return `System.Collections.${value.charAt(0).toUpperCase() + value.slice(1)}`;
    }
}
