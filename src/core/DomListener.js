import { toUpperCaseFirstSymbol } from './utils';

export class DomListener {

  constructor($root, listeners) {
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`Method ${method} is not exist in ${this.name}`);
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

  destroyDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method]);
    });
  }

  addDOMListener(listener) {
    const method = getMethodName(listener);
    this[method] = this[method].bind(this);
    this.$root.on(listener, this[method]);
  }

  removeDOMListener(listener) {
    const method = getMethodName(listener);
    this.$root.off(listener, this[method]);
  }
}

function getMethodName(eventType) {
  return 'on' + toUpperCaseFirstSymbol(eventType);
}
