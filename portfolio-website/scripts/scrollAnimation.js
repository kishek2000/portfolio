const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace("fadeOut", "fadeIn");
    }
  });
}

const fadeElms = document.querySelectorAll(".divFade");

const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach((el) => observer.observe(el));
