let password = document.getElementsByClassName("olhoSenha")
const eye1 = document.getElementById("eye1")
const eye2 = document.getElementById("eye2")

function showHide1() {
  if (password[0].type === "password") {
    password[0].setAttribute("type", "text")
    eye1.classList.remove("fa-eye")
    eye1.classList.add("fa-eye-slash")
	

  } else {
    password[0].setAttribute("type", "password")
    eye1.classList.remove("fa-eye-slash")
    eye1.classList.add("fa-eye")
  }
}

function showHide2() {
  if (password[1].type === "password") {
    password[1].setAttribute("type", "text")
    eye2.classList.remove("fa-eye")
    eye2.classList.add("fa-eye-slash")
  } else {
    password[1].setAttribute("type", "password")
    eye2.classList.remove("fa-eye-slash")
    eye2.classList.add("fa-eye")
  }
}
