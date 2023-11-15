const messageNome = document.querySelector('#messageNome');

nome.addEventListener('keyup', () => {
  const nomeValor = document.querySelector('#nome').value;
  try { 
    if (nomeValor.length < 15){
      throw {Nome_error: 'Digite seu nome completo'};
    }
    if (nomeValor.length > 60) {
      throw {Nome_error: 'Abrevie o seu nome'};
    }
} catch (error) {
  if(error?.Nome_error){
    messageNome.textContent = error.Nome_error;
    setTimeout(() => {
      messageNome.textContent='' ;
    }, 5000)
  }
    console.log(error)
  }
});
