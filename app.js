let active = 1;
let prev = 0;
let next = 2;
const cardArr = Array.from(document.querySelectorAll(".stories__card"));

const loop = () => {
  cardArr.forEach((e, index) => {
    e.classList.remove("stories__card--prev");
    e.classList.remove("stories__card--next");
    e.classList.remove("stories__card--active");
    e.classList.remove("stories__card--future");

    if (index === prev) {
      e.classList.add("stories__card--prev");
    } else if (index === active) {
      e.classList.add("stories__card--active");
    } else if (index === next) {
      e.classList.add("stories__card--next");
    } else {
      e.classList.add("stories__card--future");
    }
  });

  prev = active;
  active = next;
  next = active === 3 ? 0 : active + 1;

  console.log(prev, active, next);
};

loop();

setInterval(() => {
  loop();
}, 3000);

document
  .querySelector(".modal__toggler")
  .addEventListener("click", function () {
    document.querySelector(".modal").classList.add("modal--active");
    document
      .querySelector(".modal__content")
      .classList.add("modal__content--active");
    this.classList.add("hide");
  });

document.querySelector(".modal__close").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("modal--active");
  document
    .querySelector(".modal__content")
    .classList.remove("modal__content--active");
  document.querySelector(".modal__toggler").classList.remove("hide");
});
