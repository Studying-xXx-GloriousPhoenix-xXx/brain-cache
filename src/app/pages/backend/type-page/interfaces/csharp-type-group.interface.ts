import { CSharpType } from "./csharp-type.interface";

export interface CSharpTypeGroup {
    name: string;
    types: CSharpType[];
    partition: number;
}
