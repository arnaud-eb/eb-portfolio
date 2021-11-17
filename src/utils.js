import { links } from "./constants";

export const nextPage = (currentPage) => {
  return currentPage < links.length ? currentPage + 1 : 1;
};

export const prevPage = (currentPage) => {
  return currentPage > 1 ? currentPage - 1 : links.length;
};
