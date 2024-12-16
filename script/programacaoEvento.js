//POO WORKSHOPS
class Workshop {
    constructor(title, time, description) {
        this.title = title;
        this.time = time;
        this.description = description;
    }

    display() {
        return `
            <div class="schedule-item">
                <h3>${this.title}</h3>
                <p class="schedule-time">${this.time}</p>
                <p>${this.description}</p>
            </div>
        `;
    }
}

// Criando workshops
const workshops = [
    new Workshop("Reciclagem e Upcycling", "10:00 - 12:00", "Técnicas e ideias para reutilizar plásticos de maneira criativa."),
    new Workshop("Inovações em Bioplásticos", "14:00 - 16:00", "Desenvolvimento e aplicação de alternativas ao plástico tradicional."),
    new Workshop("Políticas e Educação Ambiental", "16:30 - 18:30", "Estratégias para conscientização e implementação de políticas eficazes.")
];

// Renderizando workshops no HTML
const workshopsContainer = document.querySelector('.workshops');
workshops.forEach(workshop => {
    workshopsContainer.innerHTML += workshop.display();
});




//POO MENTORES
class Mentor {
    constructor(name, role, description, image) {
        this.name = name;
        this.role = role;
        this.description = description;
        this.image = image;
    }

    display() {
        return `
            <div class="mentor-item">
                <img src="${this.image}" alt="Mentor">
                <div class="mentor-info">
                    <h3>${this.name}</h3>
                    <p class="mentor-role">${this.role}</p>
                    <p>${this.description}</p>
                </div>
            </div>
        `;
    }
}

// Criando mentores
const mentors = [
    new Mentor("Dr. Oscar the Grouch", "Diretor de Lixo", "Especialista em gestão de resíduos.", "../Assets/oscar de Vila Sésamo.png"),
    new Mentor("Dr. Wall-e", "Ministro do Meio Ambiente", "16 anos de experiência em educação ambiental.", "../Assets/walle.png")
];

// Renderizando mentores no HTML
const mentorsContainer = document.querySelector('.mentoring');
mentors.forEach(mentor => {
    mentorsContainer.innerHTML += mentor.display();
});



//POO PREMIAÇÕES
class Prize {
    constructor(place, rewards) {
        this.place = place;
        this.rewards = rewards;
    }

    display() {
        return `
            <div class="prize-item">
                <h3>${this.place}</h3>
                <ul>
                    ${this.rewards.map(reward => `<li>${reward}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}

// Criando prêmios
const prizes = [
    new Prize("1º Lugar", ["R$ 10.000 em financiamento", "6 meses de mentoria especializada", "Parceria com ONG ambiental"]),
    new Prize("2º Lugar", ["R$ 5.000 em financiamento", "3 meses de mentoria especializada"]),
    new Prize("3º Lugar", ["R$ 2.500 em financiamento", "1 mês de mentoria especializada"])
];

// Renderizando prêmios no HTML
const prizesContainer = document.querySelector('.prizes');
prizes.forEach(prize => {
    prizesContainer.innerHTML += prize.display();
});