export default function tooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    }
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 10}px`;
      this.tooltipBox.style.left = `${event.pageX + 10}px`;
    }
  };

  function onMouseOver() {
    const tooltipBox = createTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);
    
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  };

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}