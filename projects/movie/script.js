window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const allSeats = document.querySelectorAll(".row .seat");
  const total = document.querySelector(".total");
  const price = document.querySelector(".price");
  const select = document.querySelector("#movie");
  populateUI(allSeats, price, total, select);
  select.addEventListener("change", (e) => {
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount(allSeats, total, price, +e.target.value);
  });
  container.addEventListener("click", (e) => {
    const seat = e.target.closest(".seat");
    if (!seat || seat.classList.contains("occupied")) {
      return;
    }
    seat.classList.toggle("selected");
    updateSelectedCount(allSeats, total, price, +select.value);
  });
});

const updateSelectedCount = (allSeats, total, price, value) => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);
  const seatsIndex = [...selectedSeats].map((seat) =>
    [...allSeats].indexOf(seat),
  );
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;
  total.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * value;
};
const setMovieData = (index, price) => {
  localStorage.setItem("selectedMovieIndex", index);
  localStorage.setItem("selectedMoviePrice", price);
};

//populate UI
const populateUI = (allSeats, price, total, select) => {
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  const selectedMoviePrice = localStorage.getItem("selectedMoviePrice");
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats.length > 0 && selectedSeats !== null) {
    allSeats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  if (selectedMovieIndex !== null && selectedMoviePrice !== null) {
    select.selectedIndex = selectedMovieIndex;
    price.innerText = selectedMoviePrice * selectedSeats.length;
    total.innerText = selectedSeats.length;
  }
};
