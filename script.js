const revealTargets = document.querySelectorAll([
  ".manifesto > p",
  ".about__visual",
  ".about__copy",
  ".curriculum .wrap",
  ".transformation__copy",
  ".awards .wrap",
  ".difference .wrap",
  ".schedule .wrap",
  ".results .wrap",
  ".feedback .wrap",
  ".investment .wrap",
  ".info .wrap",
  ".closing__copy"
].join(","));

revealTargets.forEach((element, index) => {
  element.dataset.reveal = "";
  if (element.matches(".about__copy")) element.dataset.revealDelay = "1";
});

document.documentElement.classList.add("reveal-ready");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
