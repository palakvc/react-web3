export function shortenAddress(address: string = ""): string {
  return address.slice(0, 4) + "...." + address.slice(address.length - 4);
}

export function formatAddress(address: string = ""): string {
  return address.slice(0, 8) + "........" + address.slice(address.length - 8);
}

export const toBlob = (file: File | null): string =>
  file ? URL.createObjectURL(file) : "";
