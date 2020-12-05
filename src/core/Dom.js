export class Dom {
  constructor(selector) {
    this.$el = typeof(selector) === 'string' ? document.querySelector(selector) : selector;
  }

  on(event, callback) {
    this.$el.addEventListener(event, callback);
  }

  off(event, callback) {
    this.$el.removeEventListener(event, callback);
  }

  html(innerHTML) {
    this.$el.innerHTML = innerHTML;
  }

  append(node) {
    this.$el.append(node.$el);
  }
}