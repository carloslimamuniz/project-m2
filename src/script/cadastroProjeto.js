const names = [];
const areas = [];
const professions = [];
const teams = [];
const teamSizes = [];
const leaders = [];
const solutions = [];

class Project {
    constructor(name, area, profession, team, teamSize, leader, solution) {
        this.name = name;
        this.area = area;
        this.profession = profession;
        this.team = team;
        this.teamSize = teamSize;
        this.leader = leader;
        this.solution = solution;
    }

    readData() {
        // Lê os valores dos inputs
        this.name = document.getElementById("name").value.trim();
        this.area = document.getElementById("area").value.trim();
        this.profession = document.getElementById("profession").value.trim();
        this.team = document.getElementById("team").value.trim().toUpperCase();
        this.teamSize = Number(document.getElementById("teamSize").value);
        this.leader = document.getElementById("leader").value.trim().toUpperCase();
        this.solution = document.getElementById("solution").value.trim();
    }

    verifyData() {
        this.readData();

        if (
            this.name === "" ||
            this.area === "" ||
            this.profession === "" ||
            (this.team !== "S" && this.team !== "N") ||
            isNaN(this.teamSize) || this.teamSize < 1 || this.teamSize > 8 ||
            (this.leader !== "S" && this.leader !== "N") ||
            this.solution === ""
        ) {
            alert('Por favor, preencha todos os campos corretamente!');
            return null;
        }

        return new Project(
            this.name,
            this.area,
            this.profession,
            this.team,
            this.teamSize,
            this.leader,
            this.solution
        );
    }

    saveData() {
        let newProject = this.verifyData();
        if (newProject) {
            // Adiciona os dados aos arrays
            names.push(newProject.name);
            areas.push(newProject.area);
            professions.push(newProject.profession);
            teams.push(newProject.team);
            teamSizes.push(newProject.teamSize);
            leaders.push(newProject.leader);
            solutions.push(newProject.solution);

            alert("Projeto salvo com sucesso!");
            this.clearForm();
        }
    }

    listData() {
        let tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; // Limpa a tabela antes de adicionar os dados

        for (let i = 0; i < names.length; i++) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${names[i]}</td>
                <td>${areas[i]}</td>
                <td>${professions[i]}</td>
                <td>${teams[i]}</td>
                <td>${teamSizes[i]}</td>
                <td>${leaders[i]}</td>
                <td>${solutions[i]}</td>
            `;

            tbody.appendChild(row);
        }
    }

    clearForm() {
        // Limpa os campos do formulário
        document.getElementById("registrationForm").reset();
    }
}

const projectInstance = new Project();

document.getElementById("btn-save").addEventListener("click", (event) => {
    event.preventDefault(); // Evita o recarregamento do formulário
    projectInstance.saveData();
});

document.getElementById("genericalButton").addEventListener("click", () => {
    projectInstance.listData();
});

const table = document.querySelector("table");
const showProjectsButton = document.getElementById("genericalButton");

showProjectsButton.addEventListener("click", () => {
  // Alterna entre mostrar e ocultar a tabela
  table.classList.toggle("show-table");
});
