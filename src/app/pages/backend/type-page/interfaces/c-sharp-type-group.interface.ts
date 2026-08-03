import { CSharpType } from "./c-sharp-type.interface";

export interface CSharpTypeGroup {
    name: string;
    types: CSharpType[];
    partition: number;
}
