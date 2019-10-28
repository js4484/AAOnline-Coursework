const WarmUp = require("./warmup");
const Clock = require("./clock");
const dropDown = require("./drop_down");
const addTodo = require("./todo_list");

window.addEventListener('DOMContentLoaded', (event) => {

    const partyHeader = document.getElementById('party');
    WarmUp.htmlGenerator('Party Time.', partyHeader);

    const clock = new Clock();
    const clockHeader = document.getElementById('clock');

    WarmUp.htmlGenerator(clock.printTime(), clockHeader);

    dropDown.attachDogLinks();

    const mouseTarget = document.getElementsByClassName('drop-down-dog-nav');
    
    mouseTarget[0].addEventListener("mouseenter", e => {
        const doglist = document.getElementsByClassName('drop-down-dog-list');
       
        doglist[0].classList.add("showing");
    });
    mouseTarget[0].addEventListener("mouseleave", e => {
        const doglist = document.getElementsByClassName('drop-down-dog-list');

        doglist[0].classList.remove("showing");

    });
    
    addTodo();
});