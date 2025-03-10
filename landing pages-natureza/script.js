let inputcep = document.querySelector('#cep')
let inputlogradouro = document.querySelector('#logradouro')
let inputbairro = document.querySelector('#bairro')
let inputlocalidade = document.querySelector('#localidade')
let inputuf = document.querySelector('#uf')

const consultaCep = (cep) =>{
 let endpoint = 'https://viacep.com.br/ws/'+cep+'/json/';
 fetch(endpoint, {
    method:'GET',
    headers:{'content-type':"application/json"}
 })
 .then(Response => Response.json())
 .then(result => {

    inputlogradouro.value = result.logradouro;
    inputbairro.value = result.bairro;
    inputlocalidade.value = result.localidade;
    inputuf.value = result.uf;
     })

    .catch(erro => console.log(erro))

    }

    inputcep.addEventListener('input',()=>{
        if(inputcep.value.length > 7 ){
            consultaCep(inputcep.value);
        }
    })
 















