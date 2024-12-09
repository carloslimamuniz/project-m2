
class Project{
    constructor(name, area, role, hasTeam, isLeader, teamSize){
        this.name = name;
        this.area = area;
        this.role = role;
        this.hasTeam = hasTeam;
        this.isLeader = isLeader;
        this.teamSize = teamSize;
    }
}

//classe Principal Para gerenciar projetos

class projectManager{
    constructor(){
        this.projecs = [];
        this.form = document.getElementById("registrationForm");
        this.table = document.getElementById("projectsTable");
        this.tableBody = this.table.querySelector("tbody");
        this.toggleButton = document.getElementById("toggleProjectsButton");
        this.submitButton = document.getElementById("submitButton");
        this.init();
    }

    //inicializa os eventos

    init(){
        this.submitButton.addEventListener("click", () => this.addProject());
        this.toggleButton.addEventListener("click", ()=> this.toggleTable());
    }
}