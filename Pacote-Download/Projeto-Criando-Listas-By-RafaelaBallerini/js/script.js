function adicionarTarefa() {
  //Cria um input para escrever a tarefa.
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  //Variável que aparecerá quando uma tarefa for adicionada.
  const mensagem = document.getElementById("mensagem");

  //Verifica se foi escrita uma tarefa válida.
  if (tarefa === "") {
    //Mostre uma mensagem de erro.
    let mensagemErro = "Nenhuma tarefa foi adicionada!";
    mensagem.style.color = "#A34743";
    mensagem.textContent = mensagemErro;
  } else {
    //Mostre uma mensagem de sucesso.
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.style.color = "#28A745";
    mensagem.textContent = mensagemSucesso;

    //Cria e adiciona a tarefa em listas (li).
    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefa;

    //Coloca a lista (li) dentro da (ul).
    listaTarefas.appendChild(novaTarefa);
  }

  //Apaga a tarefa escrita anteriormente no input.
  inputTarefa.value = "";
}
