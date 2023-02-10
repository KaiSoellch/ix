import { r as registerInstance, h, H as Host } from "./index.0928911b.js";
const myComponentCss = ".sc-my-component-h{display:flex;flex-direction:column;width:100vw;height:100vh}";
const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
MyComponent.style = myComponentCss;
export {
  MyComponent as my_component
};
