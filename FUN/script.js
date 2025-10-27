let accum = "";
for (let i = 1; i <= 400; ++i) {
  accum += '<div class="items">+</div>';
}
document.querySelector(".container").innerHTML = accum;

let itemsElements = document.querySelectorAll(".items");

itemsElements.forEach((val, idx) => {
  val.addEventListener('mouseover', () => {
    val.style.color = "black";
    setTimeout(()=> {
      val.style.color = "";
    }, 1000);
  });
});
