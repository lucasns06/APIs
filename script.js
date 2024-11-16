function buscarArmas() {
    fetch('https://rpgapilucasns.azurewebsites.net/Armas/GetAll')
        .then(response => response.json())
        .then(data => {
            const armasLista = document.getElementById("armasLista");
            armasLista.innerHTML = '';

            data.forEach(weapon => {
                const listaItem = document.createElement("li");
                listaItem.textContent = `${weapon.nome} - Dano: ${weapon.dano}`;
                armasLista.appendChild(listaItem);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar armas:", error);
            alert("Erro ao carregar armas.");
        });
}

function buscarPersonagens() {
    fetch('https://rpgapilucasns.azurewebsites.net/Personagens/GetAll')
        .then(response => response.json())
        .then(data => {
            const personagensLista = document.getElementById("personagensLista");
            personagensLista.innerHTML = '';

            data.forEach(character => {
                const listItem = document.createElement("li");
                listItem.textContent = `${character.nome}`;
                personagensLista.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar personagens:", error);
            alert("Erro ao carregar personagens.");
        });
}

window.addEventListener('DOMContentLoaded', () => {
    const weaponsButton = document.querySelector("button[onclick='fetchWeapons()']");
    const charactersButton = document.querySelector("button[onclick='fetchCharacters()']");

    weaponsButton.addEventListener('click', fetchWeapons);
    charactersButton.addEventListener('click', fetchCharacters);
});

const baseUrl = "https://estudosapi.azurewebsites.net";

function buscarCategorias() {
    fetch('https://estudosapi.azurewebsites.net/Categorias/GetAll')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar categorias.");
            }
            return response.json();
        })
        .then(data => {
            const categoriasList = document.getElementById("categoriasList");
            categoriasList.innerHTML = "";
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
}

function buscarTarefas() {
    fetch('https://estudosapi.azurewebsites.net/Tarefas/GetAll')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar tarefas.");
            }
            return response.json();
        })
        .then(data => {
            const tarefasList = document.getElementById("tarefasList");
            tarefasList.innerHTML = "";
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
}
function buscarCategoriasTarefas() {
    fetch('https://estudosapi.azurewebsites.net/Categorias/GetAll')
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar categorias.");
            }
            return response.json();
        })
        .then(data => {
            const categoriasTarefasList = document.getElementById("categoriasTarefasList");
            categoriasTarefasList.innerHTML = "";
            data.forEach(categoria => {
                const li = document.createElement("li");
                li.textContent = `ID: ${categoria.id} | Nome: ${categoria.nome}`;
                categoriasTarefasList.appendChild(li);

                const ulTarefas = document.createElement("ul");

                categoria.tarefas.forEach(tarefa => {
                    const liTarefa = document.createElement("li");
                    liTarefa.textContent = `ID: ${tarefa.id} | Nome: ${tarefa.nome}`;
                    ulTarefas.appendChild(liTarefa);
                });

                categoriasTarefasList.appendChild(ulTarefas);
            });
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao carregar categorias.");
        });
}