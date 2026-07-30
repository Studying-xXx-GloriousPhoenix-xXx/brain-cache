import { Component } from '@angular/core';
import { LegendTag } from './interfaces/legend-tag.interface';
import { LEGEND_TAGS } from './constants/legend-tag';
import { LegendTagPipe } from './pipes/legend-tag.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { CollectionNode } from './interfaces/collection-node.interface';

@Component({
    selector: 'app-collection-hierarchy-page',
    imports: [LegendTagPipe, NgTemplateOutlet],
    templateUrl: './collection-hierarchy-page.component.html',
    styleUrl: './collection-hierarchy-page.component.scss',
})
export class CollectionHierarchyPageComponent {
    protected readonly legendTags = LEGEND_TAGS;
    protected readonly collectionTree: CollectionNode[] = [
        {
            name: 'IEnumerable',
            tag: 'legacy',
            description:
                'корень всего. Единственный метод — GetEnumerator(). Появился в .NET 1.0, до дженериков',
            children: [
                {
                    name: 'IEnumerable<T>',
                    tag: 'generic',
                    description:
                        ': IEnumerable — типизированная версия, база практически для всего ниже',
                    children: [
                        {
                            name: 'ICollection / IList / IDictionary',
                            tag: 'legacy',
                            description:
                                'нетипизированные интерфейсы 1.0, оставлены для обратной совместимости — почти все современные классы реализуют их «попутно», наравне с generic-версиями — но напрямую использовать их сегодня не нужно',
                        },
                        {
                            name: 'ICollection<T>',
                            tag: 'generic',
                            description: '+ Add, Remove, Contains, Count',
                            children: [
                                {
                                    name: 'IList<T>',
                                    tag: 'generic',
                                    description: '+ доступ по индексу',
                                    children: [
                                        {
                                            name: 'List<T>',
                                            description:
                                                'динамический массив, дефолтный выбор',
                                        },
                                        {
                                            name: 'T[] (массив)',
                                            description:
                                                'фиксированный размер; реализует IList<T> через спец. механизм CLR',
                                        },
                                        {
                                            name: 'Collection<T>',
                                            tag: 'object',
                                            description:
                                                'база для своих коллекций с переопределяемыми хуками',
                                        },
                                        {
                                            name: 'ReadOnlyCollection<T>',
                                            tag: 'object',
                                            description:
                                                'readonly-обёртка вокруг существующего IList<T>',
                                        },
                                        {
                                            name: 'ObservableCollection<T>',
                                            tag: 'object',
                                            description:
                                                'наследует Collection<T> + INotifyCollectionChanged (биндинг в WPF/MAUI)',
                                        },
                                    ],
                                },
                                {
                                    name: 'ISet<T>',
                                    tag: 'generic',
                                    description:
                                        '+ уникальность, операции над множествами',
                                    children: [
                                        {
                                            name: 'HashSet<T>',
                                            description:
                                                'хеш-таблица без значений, O(1) на Contains',
                                        },
                                        {
                                            name: 'SortedSet<T>',
                                            description:
                                                'красно-чёрное дерево, элементы отсортированы',
                                        },
                                        {
                                            name: 'ReadOnlySet<T>',
                                            tag: 'object',
                                            description:
                                                'readonly-обёртка (.NET 9+)',
                                        },
                                    ],
                                },
                                {
                                    name: 'IDictionary<TKey,TValue>',
                                    tag: 'generic',
                                    description:
                                        ': ICollection<KeyValuePair<TKey,TValue>> — ключ → значение',
                                    children: [
                                        {
                                            name: 'Dictionary<TKey,TValue>',
                                            description:
                                                'хеш-таблица, O(1) в среднем',
                                        },
                                        {
                                            name: 'SortedDictionary<TKey,TValue>',
                                            description:
                                                'красно-чёрное дерево, O(log n), ключи отсортированы',
                                        },
                                        {
                                            name: 'SortedList<TKey,TValue>',
                                            description:
                                                'отсортированный массив пар, меньше памяти, O(n) на вставку',
                                        },
                                        {
                                            name: 'OrderedDictionary<TKey,TValue>',
                                            description:
                                                '.NET 9+, хранит порядок вставки + доступ по индексу',
                                        },
                                        {
                                            name: 'ConcurrentDictionary<TKey,TValue>',
                                            tag: 'concurrent',
                                            description:
                                                'потокобезопасный словарь — важно: реализует IDictionary<TKey,TValue> напрямую, а не через IProducerConsumerCollection<T> (см. ветку Concurrent ниже)',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'IReadOnlyCollection<T>',
                            tag: 'generic',
                            description:
                                'только Count + перебор, без мутации — это не отдельная ветка классов, а «побочные» интерфейсы, которые многие классы выше реализуют дополнительно',
                            children: [
                                {
                                    name: 'IReadOnlyList<T>',
                                    description:
                                        '+ индекс на чтение → тоже реализуют List<T>, массивы, ReadOnlyCollection<T>',
                                },
                                {
                                    name: 'IReadOnlySet<T>',
                                    description:
                                        '.NET 5+ → тоже реализуют HashSet<T>, SortedSet<T>, FrozenSet<T>',
                                },
                                {
                                    name: 'IReadOnlyDictionary<TKey,TValue>',
                                    description:
                                        '→ тоже реализуют Dictionary<K,V>, ConcurrentDictionary<K,V>, FrozenDictionary<K,V>',
                                },
                            ],
                        },
                        {
                            name: 'LinkedList<T>',
                            description:
                                'двусвязный список: только ICollection<T> + IReadOnlyCollection<T>, БЕЗ IList<T> — индекса нет',
                        },
                        {
                            name: 'Queue<T> / Stack<T>',
                            description:
                                'FIFO / LIFO: реализуют только нетипизированный ICollection, не ICollection<T> — Add/Remove не имеют смысла для очереди',
                        },
                        {
                            name: 'PriorityQueue<TElement,TPriority>',
                            description:
                                '.NET 6+, мин-куча — сам по себе не IEnumerable<T> — элементы читаются через свойство UnorderedItems, чтобы не провоцировать перебор «как будто по порядку»',
                        },
                        {
                            name: 'System.Collections.Immutable',
                            tag: 'immutable',
                            description:
                                'каждое изменение возвращает новую коллекцию',
                            children: [
                                {
                                    name: 'IImmutableList<T>',
                                    description:
                                        '→ ImmutableList<T>, ImmutableArray<T> (это struct)',
                                },
                                {
                                    name: 'IImmutableSet<T>',
                                    description:
                                        '→ ImmutableHashSet<T>, ImmutableSortedSet<T>',
                                },
                                {
                                    name: 'IImmutableDictionary<TKey,TValue>',
                                    description:
                                        '→ ImmutableDictionary<K,V>, ImmutableSortedDictionary<K,V>',
                                },
                                {
                                    name: 'IImmutableQueue<T>',
                                    description: '→ ImmutableQueue<T>',
                                },
                                {
                                    name: 'IImmutableStack<T>',
                                    description: '→ ImmutableStack<T>',
                                },
                            ],
                        },
                        {
                            name: 'System.Collections.Frozen',
                            tag: 'frozen',
                            description:
                                '.NET 8+, строится медленно — читается максимально быстро',
                            children: [
                                {
                                    name: 'FrozenDictionary<TKey,TValue>',
                                    description:
                                        'также: IDictionary<K,V>, IReadOnlyDictionary<K,V>',
                                },
                                {
                                    name: 'FrozenSet<T>',
                                    description:
                                        'также: ISet<T>, IReadOnlySet<T>',
                                },
                            ],
                        },
                        {
                            name: 'System.Collections.Concurrent',
                            tag: 'concurrent',
                            description:
                                'потокобезопасные коллекции — никакого единого «IConcurrentCollection» не существует — потокобезопасные коллекции делятся на эти две несвязанные семьи, плюс ConcurrentDictionary в ветке IDictionary<K,V> выше',
                            children: [
                                {
                                    name: 'IProducerConsumerCollection<T>',
                                    description:
                                        ': IEnumerable<T>, ICollection (нетипизированный!)',
                                    children: [
                                        {
                                            name: 'ConcurrentQueue<T>',
                                        },
                                        {
                                            name: 'ConcurrentStack<T>',
                                        },
                                        {
                                            name: 'ConcurrentBag<T>',
                                            description:
                                                'у каждого потока свой локальный список',
                                        },
                                    ],
                                },
                                {
                                    name: 'BlockingCollection<T>',
                                    description:
                                        'обёртка НАД любым IProducerConsumerCollection<T> (по умолчанию — ConcurrentQueue<T>)',
                                },
                            ],
                        },
                        {
                            name: 'BitArray',
                            tag: 'legacy',
                            description:
                                'System.Collections, компактный массив бит, 1 бит на элемент',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Span<T> / ReadOnlySpan<T>',
            tag: 'memory',
            description:
                'ref struct — живёт только на стеке, в CLR НЕ МОЖЕТ реализовывать интерфейсы вообще',
        },
        {
            name: 'Memory<T> / ReadOnlyMemory<T>',
            tag: 'memory',
            description:
                'обычный struct, тоже не IEnumerable<T> напрямую — сначала берётся .Span',
        },
        {
            name: 'ArraySegment<T>',
            tag: 'memory',
            description:
                'struct, но в отличие от соседей — реализует IList<T>, ICollection<T>, IEnumerable<T>, IReadOnlyList<T>',
        },
    ];
}
