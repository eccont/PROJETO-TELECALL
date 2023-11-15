const nome = document.querySelector("#nome");
const messageNome = document.querySelector("#messageNome");

const dataNascimento = document.getElementById("data");

const cpf = document.getElementById("cpf");
const msgCPF = document.querySelector("#messageCPF");

const sexoMasc = document.getElementById("masculino")
const sexoFem = document.getElementById("feminino")
const sexoND = document.getElementById("nao-diz")

const nomeMae = document.getElementById("nomeMae")
const msgNomeMae = document.querySelector("#messageNomeMae");

const telFixo = document.getElementById("tel-fixo")
const msgTelFixo = document.querySelector("#messageTelefoneFixo");

const telCel = document.getElementById("tel-cel")
const msgTelCel = document.querySelector("#messageTelefoneCelular");

var erroFormNome = true;
var erroFormNascimento = true;
var erroCPF = true;
var erroSexo = true;
var erroNomeMae = true;
var erroTelFixo = true;
var erroTelCel = true;
//==================================== REQUIRE NOME ==================================================

function erroNome() {
  document.getElementById("messageNome").setAttribute("style", "visibility: visible");
  document.getElementById("nome").setAttribute("style", "border:1px solid red");
  erroFormNome = true;
}

nome.addEventListener("keyup", () => {
  const onlyLetras = /^[a-zA-Z \W]*$/;
  try {
    if (!onlyLetras.test(nome.value)) {
      throw { Nome_error: "Apenas letras." };
    } else if (nome.value.length < 15) {
      throw { Nome_error: "Digite seu nome completo." };
    } else if (nome.value.length > 60) {
      throw { Nome_error: "Abrevie o seu nome." };
    } else if (nome.value.length > 15 && nome.value.length < 60) {
      document
        .getElementById("messageNome")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("nome").setAttribute("style", "border:none");
      erroFormNome = false;
    }
  } catch (error) {
    if (error?.Nome_error) {
      erroNome();
      messageNome.textContent = error.Nome_error;
    }
  }
});

//==================================== REQUIRE DATA NASC ==================================================
dataNascimento.addEventListener("focusout", () => {
  try {
    console.log(dataNascimento);
    if (dataNascimento.value.length == 0 ) {
      console.log("caiu aqui")
      document.getElementById("messageDataNascimento").setAttribute("style", "visibility: visible");
      document.getElementById("data").setAttribute("style", "border:1px solid red");
      erroFormNascimento = true;
      throw { dataNasc_error: "Digite sua data de nascimento" };
    } else {
      document
        .getElementById("messageDataNascimento")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("data").setAttribute("style", "border:none");
      erroFormNascimento = false;
    }
  } catch (error) {
    if (error?.dataNasc_error) {
      messageDataNascimento.textContent = error.dataNasc_error;
    }
  }
});
//==================================== REQUIRE CPF ==================================================
function errorCPF() {
  document.getElementById("messageCPF").setAttribute("style", "visibility: visible");
  document.getElementById("cpf").setAttribute("style", "border:1px solid red");
  erroCPF = true;
  console.log("função cpf");
}

cpf.addEventListener("keyup", () => {

  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += "."
  }
  if (cpf.value.length == 11) {
    cpf.value += "-"
  }  

  const onlyNumeros = /^(?:(\d{3}).(\d{3}).(\d{3})-(\d{2}))$/;
  console.log (cpf.value)
  console.log (cpf.value.length)
  try {
    if (!onlyNumeros.test(cpf.value)) {
      throw { CPF_error: "Digite um CPF válido" };
    } else if (cpf.value.length != 14) {
      console.log ("helloooo222")
      throw { CPF_error: "Digite um CPF válido" };
    } else if (cpf.value.length == 14) {
      document
        .getElementById("messageCPF")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("cpf").setAttribute("style", "border:none");
      erroCPF = false;
    }
  } catch (error) {
    if (error?.CPF_error) {
      errorCPF();
      messageCPF.textContent = error.CPF_error;
      }
    }
});

//==================================== REQUIRE SEXO ==================================================
function errorSexo() {
  document.getElementById("messageSexo").setAttribute("style", "visibility: visible");
  erroSexo = true;
}

sexo.addEventListener("focusout", () => {
  try {
    if (sexoMasc.checked || sexoFem.checked || sexoND.checked) {
      document
        .getElementById("messageSexo")
        .setAttribute("style", "visibility: hidden");
      erroSexo = false;
    } else {
      throw { sexo_error: "Marque uma opção" };
    }
  } catch (error) {
    if (error?.sexo_error) {
      errorSexo();
      messageSexo.textContent = error.sexo_error;
      }
    }
});

//================================= REQUIRE NOME MATERNO ===========================================

function errorNomeMae() {
  document.getElementById("messageNomeMae").setAttribute("style", "visibility: visible");
  document.getElementById("nomeMae").setAttribute("style", "border:1px solid red");
  erroNomeMae = true;
}

nomeMae.addEventListener("keyup", () => {
  const onlyLetras = /^[a-zA-Z \W]*$/;
  try {
    if (!onlyLetras.test(nomeMae.value)) {
      throw { NomeMae_error: "Apenas letras." };
    } else if (nomeMae.value.length < 15) {
      throw { NomeMae_error: "Digite o nome materno completo." };
    } else if (nomeMae.value.length > 60) {
      throw { NomeMae_error: "Abrevie o seu nome." };
    } else if (nomeMae.value.length > 15 && nome.value.length < 60) {
      document
        .getElementById("messageNomeMae")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("nomeMae").setAttribute("style", "border:none");
      erroFormNome = false;
    }
  } catch (error) {
    if (error?.NomeMae_error) {
      errorNomeMae();
      msgNomeMae.textContent = error.NomeMae_error;
    }
  }
});

//================================= REQUIRE TELEFONES ===========================================

// === MÁSCARA TELEFONE ===
const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}
// === END: MÁSCARA TELEFONE ===

function errorTelFixo() {
  document.getElementById("messageTelefoneFixo").setAttribute("style", "visibility: visible");
  document.getElementById("tel-fixo").setAttribute("style", "border:1px solid red");
  erroTelFixo = true;
  
}

telFixo.addEventListener("keyup", () => {
  try {
    if (telFixo.value.length !== 14) {
            throw { telFixo_error: "Digite um telefone válido." };
    } else {
      document
      .getElementById("messageTelefoneFixo")
      .setAttribute("style", "visibility: hidden");
      document.getElementById("tel-fixo").setAttribute("style", "border:none");
      erroTelFixo = false;      
    }
  } catch (error) {
    if (error?.telFixo_error) {
      errorTelFixo();
      msgTelFixo.textContent = error.telFixo_error;
      }
    }
});

//=========================== telefone celular ======================

function errorTelCel() {
  document.getElementById("messageTelefoneCelular").setAttribute("style", "visibility: visible");
  document.getElementById("tel-cel").setAttribute("style", "border:1px solid red");
  erroTelCel = true;
  
}

telCel.addEventListener("keyup", () => {
  try {
    if (telCel.value.length !== 15) {
      throw { telCel_error: "Digite um telefone válido." };
    } else {
      document
      .getElementById("messageTelefoneCelular")
      .setAttribute("style", "visibility: hidden");
      document.getElementById("tel-cel").setAttribute("style", "border:none");
      erroTelCel = false;      
    }
  } catch (error) {
    if (error?.telCel_error) {
      errorTelCel();
      msgTelCel.textContent = error.telCel_error;
      }
    }
});