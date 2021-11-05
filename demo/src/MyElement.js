export class MyElement extends HTMLElement {
  static get observedAttributes() {
    return ["disabled"];
  }

  constructor() {
    super();
    this.__disabled = false;
  }

  /**
   * @param {boolean} val
   */
  set disabled(val) {
    this.__disabled = val;
  }

  /**
   * @returns {boolean}
   */
  get disabled() {
    return this.__disabled;
  }

  fire() {
    this.dispatchEvent(new Event("disabled-changed"));
  }
}
