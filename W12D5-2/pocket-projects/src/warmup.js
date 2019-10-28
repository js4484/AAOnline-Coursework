export const htmlGenerator = (string, htmlElement) => {
    if (htmlElement.children.length > 0) {
      for (let i = 0; i < htmlElement.children.length; i++) {
        htmlElement.removeChild(htmlElement.childNodes[i]);
      }
    }
    let element = document.createElement("p");
    element.innerHTML = string;
    htmlElement.appendChild(element);
};

