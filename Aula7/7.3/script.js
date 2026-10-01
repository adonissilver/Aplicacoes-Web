const tarefas = ["Estudar JavaScript", "Fazer os exercícios", "Comprar café", "Revisar o código","Ir à academia"];

function renderizarTarefas() {
  const listaEl = document.getElementById("listaTarefas");
  listaEl.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li");
    li.textContent = tarefas[i];
    listaEl.appendChild(li);
  }
}

renderizarTarefas();
