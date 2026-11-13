const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
  const cases = rotator.querySelectorAll('.rotator__case');
  let activeIndex = 0;

  function switchCase() {
    cases[activeIndex].classList.remove('rotator__case_active');

    activeIndex = (activeIndex + 1) % cases.length;

    const nextCase = cases[activeIndex];

    const color = nextCase.dataset.color;
    if (color) {
      nextCase.style.color = color;
    }

    nextCase.classList.add('rotator__case_active');

    const speed = Number(nextCase.dataset.speed) || 1000;

    setTimeout(switchCase, speed);
  }

  const firstCase = cases[activeIndex];
  const firstColor = firstCase.dataset.color;
  if (firstColor) {
    firstCase.style.color = firstColor;
  }
  const firstSpeed = Number(firstCase.dataset.speed) || 1000;

  setTimeout(switchCase, firstSpeed);
});