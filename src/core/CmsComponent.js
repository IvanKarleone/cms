import { DomListener } from "./DomListener";

export class CmsComponent extends DomListener {

  constructor($root, options = {}) {
    super($root, options.listeners || []);
    this.name = options.name;
    this.emitter = options.emitter;
  }

  static toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.destroyDOMListeners();
  }

  add(listener) {
    this.addDOMListener(listener);
  }

  remove(listener) {
    this.removeDOMListener(listener);
  }

  $trigger(event, ...args) {
    this.emitter.trigger(event, ...args);
  }

  $subscribe(event, fn) {
    this.emitter.subscribe(event, fn);
  }
}