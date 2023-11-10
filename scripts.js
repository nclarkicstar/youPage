function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleSectionFade(section) {
  const elements = section.querySelectorAll(".scrollFade");
  elements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.style.opacity = 1;
    } else {
      el.style.opacity = 0;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    window.addEventListener("scroll", () => {
      handleSectionFade(section);
    });
  });
});
