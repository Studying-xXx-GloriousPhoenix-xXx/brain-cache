import { CSharpTypeGroup } from "../interfaces/csharp-type-group.interface";

export const CSHARP_REAL_TYPES: CSharpTypeGroup = {
    name: 'Real Numbers',
    types: [
        {
            name: 'float',
            clrName: 'Single',
            size: '4 байта',
            range: '±1.5×10⁻⁴⁵ .. ±3.4×10³⁸, ~6-9 значащих цифр',
            signed: true,
            suffix: 'F',
            memory: {
                layout: [
                    { label: 'знак: 0 = +, 1 = −', bits: 1, kind: 'sign' },
                    { label: 'степень 2 (со смещением 127)', bits: 8, kind: 'exponent' },
                    { label: 'дробная часть после "1."', bits: 23, kind: 'mantissa' },
                ],
                formula: 'значение = ±1.дробная_часть₂ × 2^(степень − 127)',
            },
        },
        {
            name: 'double',
            clrName: 'Double',
            size: '8 байт',
            range: '±5.0×10⁻³²⁴ .. ±1.7×10³⁰⁸, ~15-17 значащих цифр',
            signed: true,
            suffix: 'D',
            memory: {
                layout: [
                    { label: 'знак: 0 = +, 1 = −', bits: 1, kind: 'sign' },
                    { label: 'степень 2 (со смещением 1023)', bits: 11, kind: 'exponent' },
                    { label: 'дробная часть после "1."', bits: 52, kind: 'mantissa' },
                ],
                formula: 'значение = ±1.дробная_часть₂ × 2^(степень − 1023)',
            },
        },
        {
            name: 'decimal',
            clrName: 'Decimal',
            size: '16 байт',
            range: '±1.0×10⁻²⁸ .. ±7.9×10²⁸, 28-29 значащих цифр',
            signed: true,
            suffix: 'M',
            memory: {
                layout: [
                    { label: 'знак: 0 = +, 1 = −', bits: 1, kind: 'sign' },
                    { label: 'не используется', bits: 23, kind: 'unused' },
                    { label: 'на сколько сдвинуть точку (0-28)', bits: 8, kind: 'scale' },
                    { label: 'целое число без знака (96 бит)', bits: 96, kind: 'integer' },
                ],
                formula: 'значение = ±integer × 10⁻ˢᶜᵃˡᵉ',
            },
        },
    ],
    partition: 3,
};