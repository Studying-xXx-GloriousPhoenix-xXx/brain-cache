import { Component } from '@angular/core';
import { TopicBlockComponent } from '../../../common-ui/topic-block/topic-block.component';
import { TopicBlock } from '../../../data/interfaces/topic-block.interface';
import { ReturnHeaderComponent } from "../../../common-ui/return-header/return-header.component";

@Component({
    selector: 'app-git-page',
    imports: [TopicBlockComponent, ReturnHeaderComponent],
    templateUrl: './git-page.component.html',
    styleUrl: './git-page.component.scss',
})
export class GitPageComponent {
    protected readonly data: Array<{ block: TopicBlock } & {
        colors: {
            text: string;
            bg: string;
        }
    }> = [
        {
            block: {
                name: 'Индексация (staging)',
                content: [
                    { command: 'git status', description: 'смотрит статус файлов' },
                    { command: 'git add file.txt', description: 'добавить один файл' },
                    { command: 'git add .', description: 'добавить всё' },
                ],
            },
            colors: { text: 'rgb(159,225,203)', bg: 'rgb(8,80,65)' },
        },
        {
            block: {
                name: 'Отмена изменений',
                content: [
                    { command: 'git checkout -- file.txt', description: 'откатить один файл' },
                    { command: 'git checkout .', description: 'откатить всё' },
                    { command: 'git clean -xdf', description: 'удалить неотслеживаемые файлы' },
                ],
            },
            colors: { text: 'rgb(245,196,179)', bg: 'rgb(113,43,19)' },
        },
        {
            block: {
                name: 'Коммиты',
                content: [
                    { command: 'git commit -m "..."', description: 'создать коммит' },
                    { command: 'git commit --amend', description: 'изменить последний коммит' },
                ],
            },
            colors: { text: 'rgb(206,203,246)', bg: 'rgb(60,52,137)' },
        },
        {
            block: {
                name: 'Reset и откат истории',
                content: [
                    { command: 'git reset -- file.txt', description: 'убрать файл из индекса' },
                    { command: 'git reset --soft', description: 'HEAD назад, всё остаётся в staging' },
                    { command: 'git reset --mixed', description: 'HEAD назад, staging очищен' },
                    { command: 'git reset --hard', description: 'удалить безвозвратно' },
                    { command: 'git reset HEAD~2', description: 'откатить 2 коммита' },
                ],
            },
            colors: { text: 'rgb(250,199,117)', bg: 'rgb(99,56,6)' },
        },
        {
            block: {
                name: 'Remote и безопасный откат',
                content: [
                    { command: 'git push', description: 'отправить коммиты на удалённый репозиторий' },
                    { command: 'git revert <sha1>', description: 'отменить коммит новым коммитом' },
                ],
            },
            colors: { text: 'rgb(181,212,244)', bg: 'rgb(12,68,124)' },
        },
    ];
}
