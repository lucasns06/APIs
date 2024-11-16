// script.js
document.addEventListener("DOMContentLoaded", () => {
    const weaponsList = document.getElementById("weaponsList");
    const charactersList = document.getElementById("charactersList");

    // Função para buscar armas
    async function fetchWeapons() {
        try {
            const response = await fetch("http://lucasns06.somee.com/RpgApi/Armas/GetAll");
            if (!response.ok) throw new Error("Erro ao buscar armas");
            
            // Converte o resultado em JSON
            const data = await response.json();

            // Limpa a lista antes de exibir
            weaponsList.innerHTML = "";

            // Adiciona os itens na lista
            data.forEach(weapon => {
                const li = document.createElement("li");
                li.textContent = `ID: ${weapon.id}, Nome: ${weapon.nome}, Dano: ${weapon.dano}, Personagem ID: ${weapon.personagemId || 'Nenhum'}`;
                weaponsList.appendChild(li);
            });
        } catch (error) {
            console.error(error);
            weaponsList.innerHTML = "<li>Erro ao carregar armas</li>";
        }
    }

    // Função para buscar personagens
    async function fetchCharacters() {
        try {
            const response = await fetch("http://lucasns06.somee.com/RpgApi/Personagens/GetAll");
            if (!response.ok) throw new Error("Erro ao buscar personagens");
            
            // Converte o resultado em JSON
            const data = await response.json();

            // Limpa a lista antes de exibir
            charactersList.innerHTML = "";

            // Adiciona os itens na lista
            data.forEach(character => {
                const li = document.createElement("li");
                li.textContent = `ID: ${character.id}, Nome: ${character.nome}, Classe: ${character.classe || 'Desconhecida'}`;
                charactersList.appendChild(li);
            });
        } catch (error) {
            console.error(error);
            charactersList.innerHTML = "<li>Erro ao carregar personagens</li>";
        }
    }

    // Event Listeners
    document.getElementById("loadWeapons").addEventListener("click", fetchWeapons);
    document.getElementById("loadCharacters").addEventListener("click", fetchCharacters);
});
