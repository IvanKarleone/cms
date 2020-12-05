import { CmsComponent } from "../../core/CmsComponent";
import { getNewElement, getNewImage } from "./getNewElement";

export class SideBar extends CmsComponent {

  static className = 'side-bar';

  constructor($root, options) {
    super($root, {
      name: 'SideBar',
      listeners: ['click'],
      ...options
    });
  }

  static toHTML() {
    return `
      <form class="form-element-creator" data-elem-creator="paragraph">
        <h5>paragraph</h5>
        <input class="form-control form-control-sm" type="text" placeholder="value" data-elem-value>
        <input class="form-control form-control-sm" type="text" placeholder="style" data-elem-style>
        <button class="btn btn-primary btn-sm" type="button" data-create-button>Create</button>
      </form>
      <form class="form-element-creator" data-elem-creator="header">
        <h5>header</h5>
        <input class="form-control form-control-sm" type="text" placeholder="value" data-elem-value>
        <input class="form-control form-control-sm" type="text" placeholder="style" data-elem-style>
        <button class="btn btn-primary btn-sm" type="button" data-create-button>Create</button>
      </form>
      <form class="form-element-creator" data-elem-creator="image">
        <h5>image</h5>
        <div class="custom-file">
          <input type="file" class="custom-file-input" data-elem-file>
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
        <input class="form-control form-control-sm" type="text" placeholder="style" data-elem-style>
        <button class="btn btn-primary btn-sm" type="button" data-create-button>Create</button>
      </form>`
  }

  onClick(event) {
    if (event.target.dataset.createButton === '') {
      const elemCreator = event.target.closest('[data-elem-creator]');
      const elemType = elemCreator.dataset.elemCreator;
      const elemValue = elemCreator.querySelector('[data-elem-value]');
      const elemStyle = elemCreator.querySelector('[data-elem-style]');
      const elemFile = elemCreator.querySelector('[data-elem-file]');

      if (elemFile && elemFile.files.length) {
        const imageName = elemFile.files[0].name;
        const file = elemFile.files[0];

        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          if (localStorage.getItem(imageName)) {
            this.$trigger('sideBar:createElem', getNewImage(localStorage.getItem(imageName), elemStyle.value));
          } else {
            this.$trigger('sideBar:createElem', getNewImage(reader.result, elemStyle.value));
            localStorage.setItem(imageName, reader.result);
          }
          elemStyle.value = '';
        }
      }

      if (elemValue) {
        this.$trigger('sideBar:createElem', getNewElement(elemType, elemValue.value, elemStyle.value));
        elemValue.value = '';
        elemStyle.value = '';
      }
    }
  }
}