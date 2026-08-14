(function () {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const totalEl = document.getElementById("slide-total");
  const currentEl = document.getElementById("slide-current");
  const progressEl = document.getElementById("deck-progress");
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");
  const overviewButton = document.getElementById("overview-button");

  let activeIndex = 0;

  if (totalEl) {
    totalEl.textContent = String(slides.length).padStart(2, "0");
  }

  const formatCount = (value, prefix, suffix) => {
    const numeric = Math.round(value);
    const body = numeric.toLocaleString("en-US");
    return `${prefix || ""}${body}${suffix || ""}`;
  };

  const animateCount = (element) => {
    if (!element || element.dataset.animated === "true") return;

    const target = Number(element.dataset.target || "0");
    const prefix = element.dataset.prefix || "";
    const suffix = element.dataset.suffix || "";
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = formatCount(target * eased, prefix, suffix);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = formatCount(target, prefix, suffix);
        element.dataset.animated = "true";
      }
    };

    requestAnimationFrame(tick);
  };

  const animateCountsInSlide = (slide) => {
    slide.querySelectorAll(".count-up").forEach(animateCount);
  };

  const resetStages = (slide) => {
    const stages = Array.from(slide.querySelectorAll(".reveal-stage"));
    if (!stages.length) return;
    stages.forEach((stage, index) => {
      stage.classList.toggle("is-visible", index === 0);
    });
  };

  const updateProgress = (slide) => {
    const progressValue = Number(slide.dataset.progress || "30");
    const normalized = ((progressValue - 30) / 45) * 100;
    if (progressEl) {
      progressEl.style.width = `${Math.max(0, Math.min(100, normalized))}%`;
    }
  };

  const updateCounters = () => {
    if (currentEl) {
      currentEl.textContent = String(activeIndex + 1).padStart(2, "0");
    }
  };

  const updateControls = () => {
    if (prevButton) prevButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === slides.length - 1;
  };

  const activateSlide = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= slides.length) return;

    const currentSlide = slides[activeIndex];
    const nextSlide = slides[nextIndex];
    if (!nextSlide || currentSlide === nextSlide) return;

    currentSlide.classList.remove("is-active");
    activeIndex = nextIndex;
    nextSlide.classList.add("is-active");
    resetStages(nextSlide);
    updateProgress(nextSlide);
    updateCounters();
    updateControls();
    animateCountsInSlide(nextSlide);
  };

  const getVisibleStageIndex = (slide) => {
    const stages = Array.from(slide.querySelectorAll(".reveal-stage"));
    return stages.findIndex((stage) => stage.classList.contains("is-visible"));
  };

  const revealNextStage = (slide) => {
    const stages = Array.from(slide.querySelectorAll(".reveal-stage"));
    if (!stages.length) return false;

    const currentStageIndex = getVisibleStageIndex(slide);
    const nextStageIndex = currentStageIndex + 1;
    if (nextStageIndex >= stages.length) return false;

    stages[nextStageIndex].classList.add("is-visible");
    return true;
  };

  const currentSlide = () => slides[activeIndex];

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-stage-next]");
    if (!trigger) return;
    const slide = trigger.closest(".slide");
    if (slide) revealNextStage(slide);
  });

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      const slide = currentSlide();
      if (slide && revealNextStage(slide)) return;
      activateSlide(activeIndex + 1);
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => activateSlide(activeIndex - 1));
  }

  if (overviewButton) {
    overviewButton.addEventListener("click", () => activateSlide(0));
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      const slide = currentSlide();
      if (slide && revealNextStage(slide)) return;
      activateSlide(activeIndex + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      activateSlide(activeIndex - 1);
    }

    if (event.key.toLowerCase() === "home") {
      event.preventDefault();
      activateSlide(0);
    }
  });

  slides.forEach((slide) => resetStages(slide));
  slides[0].classList.add("is-active");
  updateProgress(slides[0]);
  updateCounters();
  updateControls();
  animateCountsInSlide(slides[0]);
})();
