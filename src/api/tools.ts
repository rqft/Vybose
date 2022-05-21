export enum ConversionMethods {
  ENCODE = "encode",
  DECODE = "decode",
}
export function base64(data: string, method: ConversionMethods): string {
  switch (method) {
    case ConversionMethods.ENCODE:
      return Buffer.from(data).toString("base64");
    case ConversionMethods.DECODE:
      return Buffer.from(data, "base64").toString();
  }
}
export function binary(data: string, method: ConversionMethods) {
  switch (method) {
    case ConversionMethods.ENCODE:
      return data
        .split("")
        .map((c) => c.charCodeAt(0).toString(2))
        .join("");
    case ConversionMethods.DECODE:
      return data
        .split("")
        .map((c) => String.fromCharCode(parseInt(c, 2)))
        .join("");
  }
}