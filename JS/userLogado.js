const campoLogado = document.getElementById("logged");

const userLogado = JSON.parse(sessionStorage.getItem("logado"));
const dados = JSON.parse(localStorage.getItem("dadosForm"));

if (userLogado === true) {
  campoLogado.innerHTML = "Boas vindas, " + dados["nome"];
  listDropdown.innerHTML = "Sair";
}
