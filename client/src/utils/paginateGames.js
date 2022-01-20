export const paginate = (arr, page, numPages) => {
  return arr.slice(numPages * page, numPages * page + numPages);
};
