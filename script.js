const openBtn = document.querySelector(".btn"),
  popup = document.querySelector(".popup"),
  closeBtn = document.querySelector(".popup button");

openBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});
