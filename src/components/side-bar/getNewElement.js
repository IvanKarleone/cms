import { Dom } from "../../core/dom";

export function getNewElement(elemType, value, style) {
  switch(elemType) {
    case 'paragraph': 
      return createElement('p', value, style);
    case 'header': 
    return createElement('h2', value, style);
    default:
      console.log('No such element type!');
  }
}

export function getNewImage(src, style) {
  const img = document.createElement('img');

  img.src = src;
  if (style) {
    img.style = style;
  }

  return new Dom(img);
}

function createElement(tag, textConent, style) {
  const domElem = document.createElement(tag);

  domElem.textContent = textConent;
  if (style) {
    domElem.style = style;
  }

  return new Dom(domElem);
}