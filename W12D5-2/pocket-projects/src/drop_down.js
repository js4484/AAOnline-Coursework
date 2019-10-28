const dropDown = {
  dogs: {
    "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
    "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
    "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
    "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
    "Tosa": "https://www.akc.org/dog-breeds/tosa/",
    "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
    "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/"
  },
  
  dogLinkCreator: function () {
    const dogArr = [];
    const keys = Object.keys(this.dogs);
    keys.forEach((key) => {
      let aTag = document.createElement("a");
      aTag.innerHTML = key;
      aTag.href = this.dogs[key];
      let liTag = document.createElement("li");
      liTag.className = "dog-link";
      
      liTag.append(aTag);
      dogArr.push(liTag);
    })
    return dogArr;
  },

  attachDogLinks: function () {
    const listEl = document.getElementsByClassName("drop-down-dog-list");
    const dogLinks = this.dogLinkCreator();

    dogLinks.forEach(link => {
  
      listEl[0].append(link);
    })
    
  }
 
};
module.exports = dropDown;

