import { Component } from '@angular/core';
import { ReturnHeaderComponent } from "../../../common-ui/return-header/return-header.component";
import { TypeGroupComponent } from "./type-group/type-group.component";
import { CSharpTypeGroup } from './interfaces/c-sharp-type-group.interface';
import { SourceFooterComponent } from "../../../common-ui/source-footer/source-footer.component";
import { AddNoteComponent } from "../../../common-ui/add-note/add-note.component";

@Component({
    selector: 'app-type-page',
    imports: [ReturnHeaderComponent, TypeGroupComponent, SourceFooterComponent, AddNoteComponent],
    templateUrl: './type-page.component.html',
    styleUrl: './type-page.component.scss',
})
export class TypePageComponent {
    protected readonly groups: CSharpTypeGroup[] = [
        {
            name: 'Int',
            types: [
                {
                    name: 'byte',
                    clrName: 'Byte',
                    size: '1 байт',
                    range: '0 .. 255',
                    signed: false,
                },
                {
                    name: 'sbyte',
                    clrName: 'SByte',
                    size: '1 байт',
                    range: '-128 .. 127',
                    signed: true,
                },
                {
                    name: 'short',
                    clrName: 'Int16',
                    size: '2 байта',
                    range: '-32 768 .. 32 767',
                    signed: true,
                },
                {
                    name: 'ushort',
                    clrName: 'UInt16',
                    size: '2 байта',
                    range: '0 .. 65 535',
                    signed: false,
                },
                {
                    name: 'int',
                    clrName: 'Int32',
                    size: '4 байта',
                    range: '-2 147 483 648 .. 2 147 483 647',
                    signed: true,
                },
                {
                    name: 'uint',
                    clrName: 'UInt32',
                    size: '4 байта',
                    range: '0 .. 4 294 967 295',
                    signed: false,
                    suffix: 'U',
                },
                {
                    name: 'long',
                    clrName: 'Int64',
                    size: '8 байт',
                    range: '-9 223 372 036 854 775 808 .. 9 223 372 036 854 775 807',
                    signed: true,
                    suffix: 'L',
                },
                {
                    name: 'ulong',
                    clrName: 'UInt64',
                    size: '8 байт',
                    range: '0 .. 18 446 744 073 709 551 615',
                    signed: false,
                    suffix: 'UL',
                }
            ],
            partition: 3
        }
    ];
}
