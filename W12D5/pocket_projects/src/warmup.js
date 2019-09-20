const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let newP = document.createElement("p");
    let currentChildren = Array.from(htmlElement.children);

    while (currentChildren.length > 0) {
      htmlElement.removeChild(currentChildren.shift());
    }
    
    newP.innerHTML = string;
    htmlElement.appendChild(newP);
};

htmlGenerator('Eat Time.', partyHeader);