let smallScreen = window.matchMedia("(max-width: 1024px)");

// If tablet or smaller
if (smallScreen.matches) {
  let slider = document.querySelector(".slider");
  slider.innerHTML =
    '<div class="glide"><div class="glide__track" data-glide-el="track">' +
    '<ul class="glide__slides">' +
    '<li class="glide__slide" id="slide1"><img src="/gasko/img/Trainers_GASKO_007D.png" alt="Trainer image" /></li>' +
    '<li class="glide__slide" id="slide2"><img src="/gasko/img/Trainers_GASKO_007E.png" alt="Trainer image" /></li>' +
    '<li class="glide__slide" id="slide3"><img src="/gasko/img/Trainers_GASKO_007F.png" alt="Trainer image" /></li>' +
    '<li class="glide__slide" id="slide4"><img src="/gasko/img/Trainers_GASKO_007S.png" alt="Trainer image" /></li>' +
    "</ul>";
  new Glide(".glide").mount();
}
// If laptop or bigger
else {
  new fullpage("#fullpage", {
    autoScrolling: true,
    controlArrows: true,
    anchors: ["slide1", "slide2", "slide3", "slide4"],
    menu: "#myMenu"
  });

  //methods
  fullpage_api.setAllowScrolling(true);
}

// Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
