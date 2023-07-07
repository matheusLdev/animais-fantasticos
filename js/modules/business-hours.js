export default class businessHours {
  constructor(openingHours, activeClass) {
    this.openingHours = document.querySelector(openingHours);
    this.activeClass = activeClass;

  }

  operatingData() {
    this.daysWeek = this.openingHours.dataset.week.split(",").map(Number);
    this.hourWeek = this.openingHours.dataset.schedule.split(",").map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  open() {
    this.weekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;
    this.hourOpen = (this.hourNow >= this.hourWeek[0] && this.hourNow < this.hourWeek[1]);
    return this.weekOpen && this.hourOpen;
  }

  onOpen() {
    if (this.open()) {
      this.openingHours.classList.add(this.activeClass);
    };
  }

  init() {
    if (this.openingHours) {
      this.operatingData();
      this.nowData();
      this.onOpen();
    }
    return this;
  }
}
