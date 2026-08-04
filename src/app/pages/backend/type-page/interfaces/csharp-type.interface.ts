import { CSharpTypeMemoryLayout } from "./csharp-type-memory-layout";

export interface CSharpType {
    name: string;
    clrName: string;
    size: string;
    range: string;
    signed: boolean;
    suffix?: string;
    memory?: CSharpTypeMemoryLayout;
}

