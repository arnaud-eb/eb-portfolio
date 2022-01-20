import { links } from "./constants";

export const nextPage = (currentPage: number) => {
  return currentPage < links.length ? currentPage + 1 : 1;
};

export const prevPage = (currentPage: number) => {
  return currentPage > 1 ? currentPage - 1 : links.length;
};
