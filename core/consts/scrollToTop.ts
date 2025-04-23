type ScrollBehavior = "smooth" | "instant" | "auto";

export const scrollToTop = (
  containerClassName?: string,
  offset: number = 0,
  behavior: ScrollBehavior = "instant",
  useInnerContainer: boolean = false // set true if scrolling inside some parent container (e.g. .overflow-y-auto)
) => {
  if (containerClassName) {
    const targetContainer = document.querySelector(`.${containerClassName}`);

    if (useInnerContainer) {
      const parentContainer = document.querySelector(".overflow-y-auto");

      if (
        targetContainer instanceof HTMLElement &&
        parentContainer instanceof HTMLElement
      ) {
        const elementPosition = targetContainer.offsetTop;
        parentContainer.scrollTo({
          top: elementPosition - offset,
          left: 0,
          behavior,
        });
        return;
      }
    } else {
      if (targetContainer instanceof HTMLElement) {
        targetContainer.scrollTo({
          top: 0,
          left: 0,
          behavior,
        });
        return;
      }
    }
  }

  // Default to window scroll if no container found or no className provided
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });

  // Fallback for older browsers
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
