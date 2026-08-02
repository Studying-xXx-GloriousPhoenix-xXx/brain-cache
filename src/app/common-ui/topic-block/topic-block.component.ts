import { Component, input } from '@angular/core';
import { TopicBlock } from '../../data/interfaces/topic-block.interface';

@Component({
    selector: 'app-topic-block',
    imports: [],
    templateUrl: './topic-block.component.html',
    styleUrl: './topic-block.component.scss',
    host: {
        '[style.color]': 'color()',
        '[style.background]': 'bgColor()',
    },
})
export class TopicBlockComponent {
    data = input.required<TopicBlock>();
    color = input<string>('white');
    bgColor = input<string>('black');
}
