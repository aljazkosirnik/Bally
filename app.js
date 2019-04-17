setTimeout(function() {
  document.body.style.overflow = "visible";
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".content").style.display = "block";
}, 4000);

// Items on hover events
function hover(element, src) {
  element.setAttribute("src", src);
}
function unhover(element, src) {
  element.setAttribute("src", src);
}

new fullpage("#fullpage", {
  autoScrolling: true,
  controlArrows: true,
  anchors: ["woman", "woman-items", "man", "man-items"],

  afterLoad: function(origin, destination, direction) {
    let loadedSection = this;
    let itemsWoman = document.getElementsByClassName("items-woman");
    let itemsMan = document.getElementsByClassName("items-man");
    let img = document.querySelector("#img");
    let text = document.querySelector("#text");
    let h1 = document.querySelector("#h1");
    let h3 = document.querySelector("#h3");

    //ko prideš na woman-items
    if (origin.anchor == "woman") {
      itemsWoman[0].style.animation = "slide-items 1s";
      itemsWoman[0].style.webkitAnimation = "slide-items 1s";
      itemsWoman[0].style.animationFillMode = "forwards";
    }

    //ko prideš na man
    if (origin.anchor == "woman-items") {
      img.style.animation = "slide-man-image 2s";
      img.style.animationFillMode = "forwards";

      text.style.animation = "slide-man-white 2s 0.3s";
      text.style.animationFillMode = "forwards";

      h1.style.animation = "slide-man-text 2s";
      h1.style.animationFillMode = "forwards";

      h3.style.animation = "slide-man-text 2s";
      h3.style.animationFillMode = "forwards";
    }

    //ko prideš na man-items
    if (origin.anchor == "man") {
      itemsMan[0].style.animation = "slide-items 1s";
      itemsMan[0].style.webkitAnimation = "slide-items 1s";
      itemsMan[0].style.animationFillMode = "forwards";
    }
  }
});

//methods
fullpage_api.setAllowScrolling(true);
