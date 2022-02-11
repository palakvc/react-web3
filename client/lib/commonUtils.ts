export function shortenAddress(address: string = ""): string {
  return address.slice(0, 4) + "...." + address.slice(address.length - 4);
}

export function formatAddress(address: string = ""): string {
  return address.slice(0, 8) + "........" + address.slice(address.length - 8);
}

export const toBlob = (file: File | null): string =>
  file ? URL.createObjectURL(file) : "";

export function removeEmptyKeys(obj: any) {
  let i;
  for (i in obj) {
    if (obj[i] === null || obj[i] === undefined || obj[i] === "") {
      delete obj[i];
    } else if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const objValues = Object.values(obj[i]);
      const hasTruthyValue = objValues.findIndex(
        (a) => a === false || Boolean(a)
      );
      if (!~hasTruthyValue) {
        delete obj[i];
      } else removeEmptyKeys(obj[i]);
    } else {
      if (!String(obj[i])) {
        delete obj[i];
      }
    }
  }
}
