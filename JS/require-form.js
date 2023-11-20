const nome = document.getElementById("nome");
const messageNome = document.querySelector("#messageNome");

const dataNascimento = document.getElementById("data");

const cpf = document.getElementById("cpf");
const msgCPF = document.querySelector("#messageCPF");

const sexoMasc = document.getElementById("masculino");
const sexoFem = document.getElementById("feminino");
const sexoND = document.getElementById("nao-diz");

const nomeMae = document.getElementById("nomeMae");
const msgNomeMae = document.querySelector("#messageNomeMae");

const telFixo = document.getElementById("tel-fixo");
const msgTelFixo = document.querySelector("#messageTelefoneFixo");

const telCel = document.getElementById("tel-cel");
const msgTelCel = document.querySelector("#messageTelefoneCelular");

const login = document.getElementById("login");
const msgLogin = document.getElementById("messageLogin");

const senha = document.getElementById("senha");
const msgSenha = document.getElementById("messageSenha");

const repeteSenha = document.getElementById("repete-senha");
const msgRepeteSenha = document.getElementById("messageRepeteSenha");

let submit = document.getElementById("submit-form");
const messageSubmit = document.querySelector("#messageSubmit");

const logradouro = document.getElementById("logradouro")
const numeroCasa = document.getElementById("numero-casa")
const uf = document.getElementById("uf")


var erroFormNome = true;
var erroFormNascimento = true;
var erroCPF = true;
var erroSexo = true;
var erroNomeMae = true;
var erroTelFixo = true;
var erroTelCel = true;
var erroLogin = true;
var erroSenha = true;
var erroRepeteSenha = true;
//==================================== REQUIRE NOME ==================================================

function erroNome() {
  document
    .getElementById("messageNome")
    .setAttribute("style", "visibility: visible");
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
    if (dataNascimento.value.length == 0) {
      document
        .getElementById("messageDataNascimento")
        .setAttribute("style", "visibility: visible");
      document
        .getElementById("data")
        .setAttribute("style", "border:1px solid red");
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
  document
    .getElementById("messageCPF")
    .setAttribute("style", "visibility: visible");
  document.getElementById("cpf").setAttribute("style", "border:1px solid red");
  erroCPF = true;
}

cpf.addEventListener("keyup", () => {
  if (cpf.value.length == 3 || cpf.value.length == 7) {
    cpf.value += ".";
  }
  if (cpf.value.length == 11) {
    cpf.value += "-";
  }

  const onlyNumeros = /^(?:(\d{3}).(\d{3}).(\d{3})-(\d{2}))$/;
  try {
    if (!onlyNumeros.test(cpf.value)) {
      throw { CPF_error: "Digite um CPF válido" };
    } else if (cpf.value.length != 14) {
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
  document
    .getElementById("messageSexo")
    .setAttribute("style", "visibility: visible");
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
  document
    .getElementById("messageNomeMae")
    .setAttribute("style", "visibility: visible");
  document
    .getElementById("nomeMae")
    .setAttribute("style", "border:1px solid red");
  erroNomeMae = true;
}

nomeMae.addEventListener("keyup", () => {
  const onlyLetras = /^[a-zA-Z \W]*$/;
  try {
    if (!onlyLetras.test(nomeMae.value)) {
      throw { NomeMae_error: "Apenas letras." };
    } else if (nomeMae.value.length < 15) {
      throw { NomeMae_error: "Digite o nome materno completo." };
    } else if (nomeMae.value.length > 15 && nome.value.length < 60) {
      document
        .getElementById("messageNomeMae")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("nomeMae").setAttribute("style", "border:none");
      erroNomeMae = false;
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
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};
// === END: MÁSCARA TELEFONE ===

function errorTelFixo() {
  document
    .getElementById("messageTelefoneFixo")
    .setAttribute("style", "visibility: visible");
  document
    .getElementById("tel-fixo")
    .setAttribute("style", "border:1px solid red");
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
  document
    .getElementById("messageTelefoneCelular")
    .setAttribute("style", "visibility: visible");
  document
    .getElementById("tel-cel")
    .setAttribute("style", "border:1px solid red");
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

//================================= REQUIRE LOGIN ===========================================

function errorLogin() {
  document
    .getElementById("messageLogin")
    .setAttribute("style", "visibility: visible");
  document
    .getElementById("login")
    .setAttribute("style", "border:1px solid red");
  erroLogin = true;
}

login.addEventListener("keyup", () => {
  const validaLogin = /^[a-zA-Z]{6}$/;
  try {
    if (!validaLogin.test(login.value)) {
      throw {
        login_error:
          "Seu login deve conter exatamente 6 dígitos, excluídos números e caracteres especiais (, . ^ ? ~ = + - _ / *  +)",
      };
    } else {
      document
        .getElementById("messageLogin")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("login").setAttribute("style", "border:none");
      erroLogin = false;
    }
  } catch (error) {
    if (error?.login_error) {
      errorLogin();
      msgLogin.textContent = error.login_error;
    }
  }
});

//================================= REQUIRE SENHA ===========================================

function errorRepeteSenha() {
  document
    .getElementById("messageRepeteSenha")
    .setAttribute("style", "visibility: visible");

  document
    .getElementById("repete-senha")
    .setAttribute("style", "border:1px solid red");
  erroRepeteSenha = true;
}

function errorSenha() {
  document
    .getElementById("messageSenha")
    .setAttribute("style", "visibility: visible");

  document
    .getElementById("senha")
    .setAttribute("style", "border:1px solid red");
}

senha.addEventListener("keyup", () => {
  const validaSenha = /^[\w]{8}$/;
  try {
    if (!validaSenha.test(senha.value)) {
      throw { senha_error: "Exatamente 8 caracteres." };
    } else if (
      repeteSenha.value.length != 0 &&
      senha.value != repeteSenha.value
    ) {
      throw { repeteSenha_error: "As senhas não conferem." };
    } else {
      document
        .getElementById("messageSenha")
        .setAttribute("style", "visibility: hidden");
      document.getElementById("senha").setAttribute("style", "border:none");
      erroSenha = false;
      document
        .getElementById("repete-senha")
        .setAttribute("style", "border:none");
    }
  } catch (error) {
    if (error?.senha_error) {
      errorSenha();
      msgSenha.textContent = error.senha_error;
    } else if (error?.repeteSenha_error) {
      errorRepeteSenha();
      msgRepeteSenha.textContent = error.repeteSenha_error;
    }
  }
});

repeteSenha.addEventListener("keyup", () => {
  try {
    if (senha.value != repeteSenha.value) {
      throw { repeteSenha_error: "As senhas não conferem." };
    } else {
      document
        .getElementById("messageRepeteSenha")
        .setAttribute("style", "visibility: hidden");

      document
        .getElementById("repete-senha")
        .setAttribute("style", "border:none");
      erroRepeteSenha = false;
    }
  } catch (error) {
    if (error?.repeteSenha_error) {
      errorRepeteSenha();
      msgRepeteSenha.textContent = error.repeteSenha_error;
    }
  }
});

//================================= REQUIRE BOTÃO ===========================================

submit.addEventListener("click", function (event) {
  if (
    erroFormNome == true ||
    erroFormNascimento == true ||
    erroCPF == true ||
    erroSexo == true ||
    erroNomeMae == true ||
    erroTelFixo == true ||
    erroTelCel == true ||
    erroLogin == true ||
    erroSenha == true ||
    erroRepeteSenha == true
  ) {
    document
      .getElementById("messageSubmit")
      .setAttribute("style", "visibility: visible");
    document.getElementById("messageSubmit").innerHTML =
      "Preencha todos os campos corretamente";
    event.preventDefault();
  } else if (
    erroFormNome == false &&
    erroFormNascimento == false &&
    erroCPF == false &&
    erroSexo == false &&
    erroNomeMae == false &&
    erroTelFixo == false &&
    erroTelCel == false &&
    erroLogin == false &&
    erroSenha == false &&
    erroRepeteSenha == false
  ) {
    document
      .getElementById("messageSubmit")
      .setAttribute("style", "visibility: hidden");

    // ================= LOCAL STORAGE ====================
    var dadosForm = {}
      dadosForm.nome = nome.value
      dadosForm.dataNasc = dataNascimento.value
      dadosForm.cpf = cpf.value
      dadosForm.sexo = document.querySelector('input[name=sexo]:checked').value
      dadosForm.nomeMae = nomeMae.value
      dadosForm.telFixo = telFixo.value
      dadosForm.telCel = telCel.value
      dadosForm.login = login.value
      dadosForm.senha = senha.value

      dadosForm.cep = cep.value
      dadosForm.logradouro = logradouro.value
      dadosForm.numeroCasa = numeroCasa.value
      dadosForm.bairro = bairro.value
      dadosForm.localidade = localidade.value
      dadosForm.uf = uf.value

      localStorage.setItem('dadosForm', JSON.stringify(dadosForm));
      window.location.href = 'login.html';
  }
});

//localStorage.clear()