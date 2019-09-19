import DOMNodeCollection from './dom_node_collection.js';


Window.prototype.$1 = function(selectorString) {
    if (selectorString instanceof HTMLElement) {
        let DomN = new DOMNodeCollection([selectorString])
        return DomN;
    } else if (typeof selectorString === "string"){
        const NodeList = document.querySelectorAll(selectorString);
        const nodeArr = Array.from(NodeList);
        let DomN = new DOMNodeCollection(nodeArr);
        return DomN;
    };
    

    
   
};

window.$1 = $1;


