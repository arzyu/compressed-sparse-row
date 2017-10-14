export const generateArray = (length: number, value: any = 0): any[] => {
  return Array.apply(null, new Array(length))
      .map(() => typeof value === "function" ? value() : value);
};
