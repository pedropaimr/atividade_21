function exibirComentario() {
    // declaração de variaveis
    var result      = document.getElementById('result');

    // json object
    var dados = {
        'nome': document.getElementById('nome').value,
        'comentario': document.getElementById('comentario').value,
        'corTexto': document.getElementById('cor-texto').value,
        'corFundo': document.getElementById('cor-fundo').value
    };

    // output
    result.innerHTML += '<div class="result" style="color: ' + dados.corTexto + '; background-color: ' + dados.corFundo + '; font-size:16px; border-radius: 8px; padding: 8px 24px 24px 24px;"><h2>'+ dados.nome + '</h2><hr />' + dados.comentario + '</div>';

	document.getElementById('nome').value       = '';
	document.getElementById('comentario').value = '';
}