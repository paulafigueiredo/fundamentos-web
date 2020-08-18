
/*acessando o elemento por id: getElementById()
acessando o elemento  por tag:  getElementByTagName()
acessando por nome: getElementsByName()
acessando por classe: getElementsByClassName()
*/

/*Percorrendo o dom  */
let nome = window.document.getElementById('nome');
let email = window.document.getElementById('email');
let assunto = document.querySelector('#assunto');
let button = document.querySelector("form > button");
let message = document.querySelector("#message")
let formContent = document.querySelector("form > .content");

button.addEventListener('click', (event) => { /*arrow function */
	event.preventDefault() /*sem eventos, parei a atualizaçao  da pagina */

	/*se todos os campos estiveram preenchidos envia o cadastro*/
	if (nome.value == "" || email.value == "" || assunto.value == "") {  
		/*verificando se vazio */
		let txtN = document.querySelector("#txtNome");
		if (nome.value == "") {
			txtN.innerHTML = '* Campo Obrigatório';
			txtN.style.color = 'red';
		}

		let txtE = document.querySelector('#txtEmail');
		if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
			txtE.innerHTML = '* Email Invalido';
			txtE.style.color = 'red';
		}

		let txtA = document.querySelector('#txtAssunto');
		if (assunto.value  == "") {
			txtA.innerHTML = '* Campo Obrigatório';
			txtA.style.color = 'red';
		}
			
	} else {
		setTimeout(() => { /*Executando o codigo depois de 1 segundo */
			formContent.style.display = 'none';
			message.innerHTML = "Cadastro Realizado com sucesso";
		}, 1000)
	}
})