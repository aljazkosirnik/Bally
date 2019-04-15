new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  controlArrows: true,
  anchors: ["slide1", "slide2", "slide3", "slide4"],
  menu: "#myMenu"
});

//methods
fullpage_api.setAllowScrolling(true);

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
