class DOMNodeCollection {
  constructor (arr) {
    this.htmlEl = arr
    
  }

  html(str){
    if (str) {
      this.htmlEl.forEach(element => {
        element.innerHTML = str
      });
    } else {
      return this.htmlEl[0].innerHTML
    }
  }

  empty () {
    this.htmlEl.forEach(element => {
        element.innerHTML = ""
    });
  }

  append (args) {
    if (!(args instanceof Array)) {
      args = [args]
    }
    this.htmlEl.forEach(element => {

      args.forEach(argel => {
        if (argel instanceof HTMLElement) {
          argel = String(argel.outerHTML)
        }
        
        element.innerHTML += argel;
      })

  })

  }


  attr (name, value) {
    if (name && value){
      this.htmlEl.forEach(element => {  
          element.setAttribute(name, value)
      })
    } else if (name) {
      return this.htmlEl[0].getAttribute(name);
    }
    
  }

  addClass (newClass) {
      if (this.attr("class")) {
          let str = this.attr("class");
          str += ` ${newClass}`;
          this.attr("class", str);
        } else {
          this.attr("class", newClass);
        }
  }

  removeClass (oldClass) {

  }
};

// a = document.createElement("p")

// var node = document.createTextNode("This is a new paragraph.");

export default DOMNodeCollection;