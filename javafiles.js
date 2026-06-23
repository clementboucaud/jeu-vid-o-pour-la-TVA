// Base de données des personnages et leurs stats
const characterStats = {
    Mario: {
        photo: "",
        speed: 7,
        power: 7,
        defense: 6,
        weight: 7,
        recovery: 6
    },
    DonkeyKong: {
        speed: 4,
        power: 9,
        defense: 8,
        weight: 10,
        recovery: 5
    },
    Samus: {
        speed: 5,
        power: 8,
        defense: 7,
        weight: 6,
        recovery: 7
    },
    Link: {
        speed: 5,
        power: 8,
        defense: 8,
        weight: 7,
        recovery: 5
    },
    Kirby: {
        speed: 6,
        power: 6,
        defense: 5,
        weight: 4,
        recovery: 9
    },
    Fox: {
        speed: 9,
        power: 7,
        defense: 5,
        weight: 3,
        recovery: 7
    },
    Pikachu: {
        speed: 8,
        power: 6,
        defense: 5,
        weight: 3,
        recovery: 6
    },
    Yoshi: {
        speed: 6,
        power: 6,
        defense: 7,
        weight: 5,
        recovery: 7
    },
    Sonic: {
        speed: 10,
        power: 6,
        defense: 4,
        weight: 4,
        recovery: 6
    },
    CaptainFalcon: {
        speed: 8,
        power: 9,
        defense: 5,
        weight: 6,
        recovery: 5
    },
    Snake: {
        speed: 4,
        power: 8,
        defense: 7,
        weight: 8,
        recovery: 5
    },
    "Mega Man": {
        speed: 20,
        power: 20,
        defense: 20,
        weight: 20,
        recovery: 20,
        auraFarming: 67
    },
    Ness: {
        speed: 6,
        power: 7,
        defense: 5,
        weight: 5,
        recovery: 6
    },
    Cloud: {
        speed: 5,
        power: 9,
        defense: 5,
        weight: 6,
        recovery: 4
    },
    "Pac-man": {
        speed: 6,
        power: 6,
        defense: 5,
        weight: 4,
        recovery: 5
    }
};

// Fonction pour afficher les stats d'un personnage
function displayCharacterStats(selectId, statsContainerId) {
    const select = document.getElementById(selectId);
    const statsContainer = document.getElementById(statsContainerId);
    
    const character = select.value;
    const stats = characterStats[character];
    
    if (stats) {
        statsContainer.innerHTML = `
            <div class="stats-display">
                <h4>${character}</h4>
                <div class="stat-row">
                    <span class="stat-label">Vitesse:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.speed * 10}%"></div>
                    </div>
                    <span class="stat-value">${stats.speed}/10</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Puissance:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.power * 10}%"></div>
                    </div>
                    <span class="stat-value">${stats.power}/10</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Défense:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.defense * 10}%"></div>
                    </div>
                    <span class="stat-value">${stats.defense}/10</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Poids:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.weight * 10}%"></div>
                    </div>
                    <span class="stat-value">${stats.weight}/10</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Récupération:</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${stats.recovery * 10}%"></div>
                    </div>
                    <span class="stat-value">${stats.recovery}/10</span>
                </div>
            </div>
        `;
    }
}
