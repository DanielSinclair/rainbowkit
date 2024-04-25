declare module 'abitype' {
  export interface Register {
    AddressType: `0x${string}`;
    BigIntType: bigint;
    BytesType: { inputs: `0x${string}` | Uint8Array; outputs: `0x${string}` };
    IntType: number;
    ArrayMaxDepth: false;
    FixedArrayMinLength: 1;
    FixedArrayMaxLength: 99;
    StrictAbiType: false;
  }
}
