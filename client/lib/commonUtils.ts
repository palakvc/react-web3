export function shortenAddress(address: string = ""): string {
  return address.slice(0, 4) + "...." + address.slice(address.length - 4);
}

export function formatAddress(address: string = ""): string {
  return address.slice(0, 8) + "........" + address.slice(address.length - 8);
}

export const toBlob = (file: File | null | undefined): string =>
  file ? URL.createObjectURL(file) : "";

export const isFile = (file: any) => "File" in window && file instanceof File;

export function removeEmptyKeys<T>(obj: T) {
  console.log("in fx-->", obj);
  let i: keyof T;
  if (typeof obj !== "object") {
    return;
  }
  for (i in obj) {
    if (obj[i] === null || obj[i] === undefined) {
      delete obj[i];
    } else if (
      typeof obj[i] === "object" &&
      !isFile(obj[i]) &&
      !Array.isArray(obj[i])
    ) {
      const objValues = Object.values(obj[i]);
      const hasTruthyValue = objValues.findIndex(
        (a) => a === false || Boolean(a)
      );
      if (!~hasTruthyValue) {
        delete obj[i];
      } else removeEmptyKeys(obj[i]);
    } else {
      if (!String(obj[i]).trim() || String(obj[i]) === "null") {
        delete obj[i];
      }
    }
  }
}
