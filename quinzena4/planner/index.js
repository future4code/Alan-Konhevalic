function criarTarefa() {
    //declara variavel para armazenar o valor do dia que o usuario escolher
    let diaDaSemana = document.getElementById('dias-semana').value

    //declara variavel para armazenar o que o usuario digitar
    let tarefa = document.getElementById('tarefa').value
    
    function adicionarTarefa(diaDaSemana){
        
        
        //se o campo não estiver vazio
        if (tarefa !== '') {
            //declara variavel para armazenar o id do dia que o usuario escolher
            const minhaTarefa = document.getElementById(diaDaSemana)
            //adiciona no HTML o valor (atividade) digitada pelo usuario no dia escolhido
            minhaTarefa.innerHTML += `<li>${tarefa}</li>`
            //limpa o campo para o usuario digitar outra atividade
            document.getElementById('tarefa').value= ''
        } else {
            //se o campo estiver vazio, mostrará esta mensagem
            alert("Por favor, preencha o campo")
        }
        
        
    }
    //se o valor da opção (option) for igual ao id do dia da semana
    if(diaDaSemana == "domingo") {
        //executará a função com o parametro de dia da semana
        adicionarTarefa('domingo')
    }

    if(diaDaSemana == "segunda") {
        adicionarTarefa('segunda')
        }

    if(diaDaSemana == "terca"){
        adicionarTarefa('terca')
    }

    if(diaDaSemana == "quarta"){
        adicionarTarefa('quarta')
    }

    if( diaDaSemana == "quinta") {
        adicionarTarefa('quinta')
    }

    if (diaDaSemana=="sexta") {
        adicionarTarefa('sexta')
    }

    if (diaDaSemana == "sabado") {
        adicionarTarefa('sabado')
    }
}
