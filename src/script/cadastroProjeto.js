const names = new Array();
const areas = new Array();
const professions = new Array();
const teams= new Array();
const teamSizes = new Array();
const solutions = new Array();

class Project{
    constructor(name, area, profession, team, teamSize, leader, solution){
        this.name = name;
        this.area = area;
        this.profession = profession;
        this.team = team;
        this.teamSize = teamSize;
        this.leader = leader;
        this.solution = solution;
    }
    verification(){
        if(name && area && profession && team && tesmSize && solution){
            return new Project(name, area, profession, team, teamSize, solution)
        }else{
            alert("Por favor, preencha todos os campos")
        }
    }
  
}