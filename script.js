// Função para buscar armas da API
function fetchWeapons() {
    fetch('https://rpgapilucasns.azurewebsites.net/Armas/GetAll')  // Endpoint da API para armas
        .then(response => response.json())
        .then(data => {
            const weaponsList = document.getElementById("weaponsList");
            weaponsList.innerHTML = '';  // Limpar lista existente

            // Adicionar as armas à lista
            data.forEach(weapon => {
                const listItem = document.createElement("li");
                listItem.textContent = `${weapon.nome} - Dano: ${weapon.dano}`;
                weaponsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar armas:", error);
            alert("Erro ao carregar armas.");
        });
}

// Função para buscar personagens da API
function fetchCharacters() {
    fetch('https://rpgapilucasns.azurewebsites.net/Personagens/GetAll')  // Endpoint da API para personagens
        .then(response => response.json())
        .then(data => {
            const charactersList = document.getElementById("charactersList");
            charactersList.innerHTML = '';  // Limpar lista existente

            // Adicionar os personagens à lista
            data.forEach(character => {
                const listItem = document.createElement("li");
                listItem.textContent = `${character.nome}`;
                charactersList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar personagens:", error);
            alert("Erro ao carregar personagens.");
        });
}

// Esperar o DOM ser completamente carregado antes de adicionar event listeners
window.addEventListener('DOMContentLoaded', () => {
    const weaponsButton = document.querySelector("button[onclick='fetchWeapons()']");
    const charactersButton = document.querySelector("button[onclick='fetchCharacters()']");

    // Adicionar os event listeners aos botões
    weaponsButton.addEventListener('click', fetchWeapons);
    charactersButton.addEventListener('click', fetchCharacters);
});
