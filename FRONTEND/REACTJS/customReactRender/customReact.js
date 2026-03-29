const mainContainer = document.querySelector("#root");
function renderContent(root, element) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.child;
  for (const property in element.properties) {
    domElement.setAttribute(property, element.properties[property]);
  }
  root.appendChild(domElement);
}
const elementProperties = {
  type:"a",
  child:"This is custom react render",
  properties:{
    href:"https://google.com",
    target:"_blank"
  }
}
renderContent(mainContainer, elementProperties);
