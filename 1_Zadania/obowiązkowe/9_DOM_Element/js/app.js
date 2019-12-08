document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     function getDataInfo(elements) {
         var array = [];
         for(let i = 0; i<elements.length; i++) {
             array.push(elements[i].dataset.color);
         }
         console.log(array);
     }

     getDataInfo(links);

     console.log(homeElement);
     console.log(childElements);
     console.log(banner);
     console.log(blocks);
     console.log(links);


     for(let i = 0; i<childElements.length; i++) {
         console.log(childElements[i].tagName, childElements[i].classList)
     }

     for(let i = 0; i<blocks.length; i++) {
        console.log(blocks[i].tagName, blocks[i].classList)
    }

    for(let i = 0; i<links.length; i++) {
        console.log(links[i].tagName, links[i].classList)
    }


    let blocksAll = document.querySelector('.blocks');

    console.log(blocksAll.innerHTML);
    console.log(blocksAll.outerHTML);

    blocksAll.innerHTML = "new string"

    const mainFooter = document.querySelector('#mainFooter');

    function getId(element) {
        return element.id;
    }

    const testId = getId(mainFooter);
    console.log(testId);


    function getTags(elements) {
        var array1 = [];

        for(i=0; i<elements.length; i++) {
            array1.push(elements[i].tagName);
        }
        return array1;
    }

    const test1 = getTags(childElements);
    console.log(test1);


    function getClassInfo(element) {
        var tab = [];
        for(let i=0;i<element.classList.length;i++) {
            tab.push(element.classList[i]);
        }
        return tab;
    }

    console.log(getClassInfo(banner));

    //

    var allLi = document.querySelectorAll('nav li')
    function setDataDirection(elements) {
        for(let i=0;i<elements.length; i++) {
            if (!elements[i].getAttribute('data-direction') == "top") {
                elements[i].setAttribute('data-direction', "top");
            }
        }
    }

    setDataDirection(allLi);

});
