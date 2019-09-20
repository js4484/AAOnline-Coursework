const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
    let dogArr = [];
    Object.keys(dogs).forEach((dog) => {
        let anchor = document.createElement("a");
        anchor.innerHTML = dog;
        anchor.setAttribute("href", dogs[dog]);
        let li = document.createElement("li");
        li.classList.add("dog-link");
        li.appendChild(anchor);
        dogArr.push(li);
    })
    
    return dogArr;
};

const attachDogLinks = () => {
    let dogLinks = dogLinkCreator(dogs);
    const dropDown = document.getElementsByClassName("drop-down-dog-list");
    

    dogLinks.forEach((link) => {
        dropDown[0].appendChild(link);
    })
};

const handleEnter = () => {
    const dropDown = document.getElementsByClassName("drop-down-dog-nav");
    const li = Array.from(dropDown[0].getElementsByClassName("dog-link"));
    dropDown[0].addEventListener("mouseenter", () => {
 
        li.forEach((link) => {
   
            link.classList.remove("dog-link");
        })
    });
};

const handleLeave = () => {
    const dropDown = document.getElementsByClassName("drop-down-dog-list");
    const li = Array.from(dropDown[0].getElementsByClassName("dog-link"));
    dropDown[0].addEventListener("mouseleave", () => {
        li.forEach((link) => {
            link.classList.add("dog-link");
        })
    });
};

attachDogLinks();
handleEnter();
handleLeave();