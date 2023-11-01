const cep = document.querySelector('#cep');
const address = document.querySelector('#address');
const bairro = document.querySelector('#bairro')
const localidade = document.querySelector('#localidade');
const messageCep = document.querySelector('#messageCep');

cep.addEventListener('focusout', async () => {

  try {
    const onlyNumbers  = /^[0-9]+$/;
    const cepValid  = /^[0-9]{8}$/;
      if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
        throw {cep_error: 'CEP inválido'};
      }

    const response = await fetch (`https://viacep.com.br/ws/${cep.value}/json/`)
    if (!response.ok) {
      throw await response.json();
    }

    const responseCep = await response.json();

    logradouro.value = responseCep.logradouro;
    uf.value = responseCep.uf;
    bairro.value = responseCep.bairro;
    localidade.value = responseCep.localidade;

    if (!response.error) {
      bairro.setAttribute("disabled", "disabled");
      localidade.setAttribute("disabled", "disabled");
      uf.setAttribute("disabled", "disabled");
    }


  } catch (error) {
    if(error?.cep_error){
      messageCep.textContent = error.cep_error;
      setTimeout(() => {
        messageCep.textContent='' ;
      }, 5000)
    }
      console.log(error)
    }

})