import { CmsComponent } from "../../core/CmsComponent";

export class MainContent extends CmsComponent {
  
  static className = 'main-content';

  constructor($root, options) {
    super($root, {
      name: 'MainContent',
      ...options
    });
  }

  init() {
    this.$subscribe('sideBar:createElem', (newElement) => {
      this.$root.append(newElement);
    });
  }
}