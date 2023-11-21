const dadosForm = JSON.parse(localStorage.getItem("dadosForm"));

const inputLogin = document.getElementById("login");
const inputSenha = document.getElementById("senha");

console.log(dadosForm);

let submit = document.getElementById("submit-form");
const msgError = document.getElementById("messageError");

function validaError() {
  document
    .getElementById("messageError")
    .setAttribute("style", "visibility: visible");
}

submit.addEventListener("click", (event) => {
  console.log(login + 1);
  console.log(inputLogin.value);
  try {
    if (dadosForm) {
      const login = dadosForm["login"];
      const senha = dadosForm["senha"];
      if (inputLogin.value === login) {
        if (inputSenha.value === senha) {
          sessionStorage.setItem("logado", true);
          window.location.href = "/index.html";
        } else {
          throw { erro_error: "Senha inválida." };
        }
      } else {
        throw { erro_error: "Usuário não cadastrado." };
      }
    } else {
      throw { erro_error: "Usuário não cadastrado." };
    }
  } catch (error) {
    if (error?.erro_error) {
      validaError();
      messageError.textContent = error.erro_error;
    }
  }
  event.preventDefault();
});

sessionStorage.clear();
