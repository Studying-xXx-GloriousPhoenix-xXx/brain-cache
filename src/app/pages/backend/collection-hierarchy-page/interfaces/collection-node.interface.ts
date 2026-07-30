import { LegendTag } from "./legend-tag.interface";

export interface CollectionNode {
    name: string;
    tag?: LegendTag;
    description?: string;
    children?: CollectionNode[];
}
