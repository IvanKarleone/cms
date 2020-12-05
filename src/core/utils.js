import { Dom } from "./dom";

export function toUpperCaseFirstSymbol(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string[0].toUpperCase() + string.slice(1);
}

export function createDomElem(tag, className) {
  const domElem = document.createElement(tag);

  domElem.classList.add(className);

  return new Dom(domElem);
}
