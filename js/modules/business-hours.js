export default function businessHours() {
  const openingHours = document.querySelector("[data-week]");
  const daysWeek = openingHours.dataset.week.split(",").map(Number);
  const hourWeek = openingHours.dataset.schedule.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekOpen = daysWeek.indexOf(dayNow) !== -1;
  const hourOpen = (hourNow >= hourWeek[0] && hourNow < hourWeek[1]);

  if (weekOpen && hourOpen) {
    openingHours.classList.add("open");
  };
}
