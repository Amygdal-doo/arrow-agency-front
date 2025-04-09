export const scrollToTop = () => {
  const scrollableContainer = document.querySelector(".overflow-y-auto");

  if (scrollableContainer instanceof HTMLElement) {
    scrollableContainer.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  // Fallback for older browsers
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
