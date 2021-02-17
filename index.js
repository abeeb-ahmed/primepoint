window.addEventListener("load", () => {
  const faders = document.querySelectorAll(".fade-in");
  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 750,
  });
  tl.add({
    targets: "#navigation",
    translateX: [-300, 0],
  })
    .add(
      {
        targets: ".logo",
        translateY: [-100, 0],
      },
      "-=20"
    )
    .add(
      {
        targets: ".home__grid",
        translateY: [1000, 0],
      },
      "-=50"
    );
  const appearOptions = {
    thresholds: 1,
    rootMargin: "0px 0px -200px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});
