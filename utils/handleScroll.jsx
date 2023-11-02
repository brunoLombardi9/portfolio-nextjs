function calculateOffset(firstRef, secondRef) {
  const firstElement = firstRef.current;
  const targetElement = secondRef.current;

  if (firstElement && targetElement) {
    const offset =
      firstElement.getBoundingClientRect().top -
      targetElement.getBoundingClientRect().top;

    return offset;
  }
}

export function desktopScroll(firstRef, secondRef) {
  const offset = calculateOffset(firstRef, secondRef);

  window.scrollBy({ top: -offset - 15, behavior: "smooth" });
}

export function mobileScroll(firstRef, secondRef) {
  const offset = calculateOffset(firstRef, secondRef);

  window.scrollBy({ top: -offset - 75, behavior: "smooth" });
}
