import { cloneDeep } from "lodash";
export const sortMaxToMin = (array: any, key: any) => {
  if (!array || !key) return [];
  let clonedArray = cloneDeep(array);
  clonedArray.sort((a: any, b: any) => b[key] - a[key]);
  return clonedArray;
};
