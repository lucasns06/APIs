const baseUrl = "https://estudosapi.azurewebsites.net";

document.getElementById("fetchCategorias").addEventListener("click", () => {
    fetch(`${baseUrl}/Categorias/GetAll`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar categorias.");
            }
            return response.json();
        })
        .then(data => {
            const categoriasList = document.getElementById("categoriasList");
            categoriasList.innerHTML = ""; // Limpa a lista antes de popular
            data.forEach(categoria => {
                const li = document.createElement("li");
                li.textContent = `ID: ${categoria.id} | Nome: ${categoria.nome}`;
                categoriasList.appendChild(li);
            });
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao carregar categorias.");
        });
});

document.getElementById("fetchTarefas").addEventListener("click", () => {
    fetch(`${baseUrl}/Tarefas/GetAll`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar tarefas.");
            }
            return response.json();
        })
        .then(data => {
            const tarefasList = document.getElementById("tarefasList");
            tarefasList.innerHTML = ""; // Limpa a lista antes de popular
            data.forEach(tarefa => {
                const li = document.createElement("li");
                li.textContent = `ID: ${tarefa.id} | Nome: ${tarefa.nome}`;
                tarefasList.appendChild(li);
            });
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao carregar tarefas.");
        });
});
