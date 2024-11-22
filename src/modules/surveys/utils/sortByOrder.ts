export const compareByOrderFn = <T extends { order: number }>(item1: T, item2: T) => {
  if (item1.order > item2.order) return 1;
  if (item2.order > item1.order) return -1;
  return 0;
};
