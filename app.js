// setTimeout(function() {
//   document.body.style.overflow = "visible";
//   document.querySelector(".loading").style.display = "none";
//   document.querySelector(".content").style.display = "block";
// }, 4000);

// To izbriši ko končaš
document.body.style.overflow = "visible";
document.querySelector(".content").style.display = "block";

new fullpage("#fullpage", {
  autoScrolling: true,
  controlArrows: true
});

//methods
fullpage_api.setAllowScrolling(true);
