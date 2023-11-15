let element = document.getElementById("chk");
const chk = document.getElementById("chk");

  chk.addEventListener("click", () => {
    console.log("hello")
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("form-item");
  });
  