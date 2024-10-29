// scrollReveal.js

document.addEventListener("DOMContentLoaded", function() {
    var scrollRevealElements = document.querySelectorAll(".scroll-reveal");
  
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var item = entry.target;
          item.style.opacity = 1;
          item.style.transform = "translateY(0)";
          observer.unobserve(item);
        }
      });
    }, options);
  
    scrollRevealElements.forEach(function(item) {
      observer.observe(item);
    });
  });
  