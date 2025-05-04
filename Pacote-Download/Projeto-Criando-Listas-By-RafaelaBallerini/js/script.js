let tarefas = [];

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  const mensagem = document.getElementById("mensagem");

  if (tarefa === "") {
    mensagem.textContent = "Digite uma tarefa para adicioná-la à sua lista!";
  } else {
    mensagem.textContent = "Tarefa adicionada com sucesso!";
    tarefas.push(tarefa);
    renderizarTarefas();
  }

  inputTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    novaTarefa.appendChild(botaoRemover);
    novaTarefa.appendChild(botaoEditar);
    listaTarefas.appendChild(novaTarefa);
  }

  atualizarBotaoRemoverTudo();
}

function atualizarBotaoRemoverTudo() {
  let botaoRemoverTudo = document.getElementById("botaoRemoverTudo");

  if (tarefas.length > 0) {
    if (!botaoRemoverTudo) {
      botaoRemoverTudo = document.createElement("button");
      botaoRemoverTudo.id = "botaoRemoverTudo";
      botaoRemoverTudo.textContent = "Remover Tudo";
      botaoRemoverTudo.onclick = limparLista;
      document.getElementById("apagarTudo").appendChild(botaoRemoverTudo);
    }
  } else {
    if (botaoRemoverTudo) {
      botaoRemoverTudo.remove();
    }
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
  atualizarBotaoRemoverTudo(); // Garante que o botão suma ao remover a última tarefa
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:");
  if (tarefaEditada && tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada.trim();
    renderizarTarefas();
  }
}

function limparLista() {
  tarefas = [];
  renderizarTarefas();
  document.getElementById("mensagem").textContent =
    "Lista de tarefas limpa com sucesso";
  atualizarBotaoRemoverTudo(); // Garante que o botão suma ao remover tudo
}
