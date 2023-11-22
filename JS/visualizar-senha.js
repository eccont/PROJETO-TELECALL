let password = document.getElementsByClassName("olhoSenha")
const eye1 = document.getElementById("eye1")
const eye2 = document.getElementById("eye2")

function showHide1() {
  if (password[0].type === "password") {
    password[0].setAttribute("type", "text")
    eye1.classList.add("hide")
  } else {
    password[0].setAttribute("type", "password")
    eye1.classList.remove("hide")
  }
}

function showHide2() {
  if (password[1].type === "password") {
    password[1].setAttribute("type", "text")
    eye2.classList.add("hide")
  } else {
    password[1].setAttribute("type", "password")
    eye2.classList.remove("hide")
  }
}


