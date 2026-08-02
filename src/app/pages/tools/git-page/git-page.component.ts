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
                name: 'Основные команды',
                content: [
                    { command: 'git clone <url>', description: 'склонировать репозиторий' },
                    { command: 'git pull', description: 'забрать изменения и слить с текущей веткой' },
                    { command: 'git fetch', description: 'забрать изменения без слияния' },
                    { command: 'git log', description: 'показать историю коммитов' },
                ],
            },
            colors: { text: 'rgb(225,245,238)', bg: 'rgb(15,110,86)' },
        },
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
                name: 'Ветки и переключение',
                content: [
                    { command: 'git restore file.txt', description: 'современный аналог checkout -- (откатить файл)' },
                    { command: 'git switch branch-name', description: 'переключиться на ветку' },
                    { command: 'git switch -c branch-name', description: 'создать ветку и переключиться' },
                ],
            },
            colors: { text: 'rgb(244,192,209)', bg: 'rgb(114,36,62)' },
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
                name: 'Слияние и синхронизация',
                content: [
                    { command: 'git merge feature-branch', description: 'влить ветку в текущую (FF по умолчанию)' },
                    { command: 'git rebase <sha1>', description: 'перенести коммиты на новую базу' },
                    { command: 'git cherry-pick <sha1>', description: 'перенести один коммит в текущую ветку' },
                ],
            },
            colors: { text: 'rgb(192,221,151)', bg: 'rgb(39,80,10)' },
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
        {
            block: {
                name: 'Remote-репозитории',
                content: [
                    { command: 'git remote add <name> <url>', description: 'добавить удалённый репозиторий' },
                    { command: 'git remote -v', description: 'показать список origin с адресами' },
                    { command: 'git remote show <name>', description: 'подробная информация об origin' },
                    { command: 'git remote remove origin', description: 'удалить связь с удалённым репозиторием' },
                    { command: 'git push -u origin branch-name', description: 'отправить новую ветку и привязать к remote' },
                ],
            },
            colors: { text: 'rgb(133,183,235)', bg: 'rgb(4,44,83)' },
        },
        {
            block: {
                name: 'Теги',
                content: [
                    { command: 'git tag tag-name', description: 'создать тег на коммите' },
                    { command: 'git tag --list', description: 'показать все теги' },
                    { command: 'git push --tags', description: 'отправить теги на remote' },
                    { command: 'git checkout tag-name', description: 'переключиться на тег' },
                ],
            },
            colors: { text: 'rgb(211,209,199)', bg: 'rgb(68,68,65)' },
        },
        {
            block: {
                name: 'Stash',
                content: [
                    { command: 'git stash save "..."', description: 'сохранить изменения во временный буфер' },
                    { command: 'git stash list', description: 'показать список stash' },
                    { command: 'git stash apply', description: 'применить, оставить в списке' },
                    { command: 'git stash drop', description: 'удалить из списка' },
                    { command: 'git stash pop', description: 'применить и удалить (apply + drop)' },
                ],
            },
            colors: { text: 'rgb(247,193,193)', bg: 'rgb(121,31,31)' },
        },
        {
            block: {
                name: 'Прочие инструменты',
                content: [
                    { command: 'git blame -L 10,25 file.txt', description: 'показать авторов строк 10–25' },
                    { command: 'git bisect', description: 'бинарный поиск коммита, сломавшего код' },
                    { command: 'git rerere', description: 'запоминает разрешение конфликтов слияния' },
                    { command: 'git submodule', description: 'встраивает сторонний репозиторий как поддиректорию' },
                ],
            },
            colors: { text: 'rgb(197,164,246)', bg: 'rgb(48,28,88)' },
        },
        {
            block: {
                name: 'Стратегии workflow',
                content: [
                    { command: 'Centralized', description: 'всё в master, конфликты решаются там же' },
                    { command: 'Feature-branch workflow', description: 'ветки на фичи, merge в master по готовности' },
                    { command: 'Gitflow', description: 'строгая модель веток: main/develop/feature/release/hotfix' },
                    { command: 'Integration manager workflow', description: 'один "blessed repo", менеджер сводит пул-реквесты' },
                    { command: 'Dictator & lieutenants', description: 'иерархия: разработчики → лейтенанты → диктатор → blessed repo' },
                    { command: 'Forking workflow', description: 'форки + pull request в оригинальный репозиторий' },
                ],
            },
            colors: { text: 'rgb(207,209,209)', bg: 'rgb(44,44,42)' },
        },
    ];
}