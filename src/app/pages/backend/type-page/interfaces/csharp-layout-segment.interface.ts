export interface LayoutSegment {
    label: string;
    bits: number;
    kind: 'sign' | 'exponent' | 'mantissa' | 'scale' | 'integer' | 'unused';
}