import { Dom } from "./dom";
import { createDomElem } from "./utils";
import { Emitter } from './Emitter';

export class Cms {

  constructor(selector, components = []) {
    this.$root = new Dom(selector);
    this.components = components;
    this.emitter = new Emitter();
  }

  render() {
    this.components = this.components.map(Component => {
      const $root = createDomElem('div', Component.className);

      $root.html(Component.toHTML());
      this.$root.append($root);

      return new Component($root, {
        emitter: this.emitter
      });
    });
  }

  init() {
    this.render();
    this.components.forEach(component => component.init());
  }

  destroy() {
    this.components.forEach(component => component.destroy());
  }
}