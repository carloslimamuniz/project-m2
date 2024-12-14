const names = new Array();
const areas = new Array();
const professions = new Array();
const teams= new Array();
const teamSizes = new Array();
const leaders = new Array();
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

    readData(){
        this.name = document.getElementById("name").value;
        this.area = document.getElementById("area").value;
        this.profession = document.getElementById("profession");
        this.team = document.getElementById("team").value;
        this.teamSize = Number(document.getElementById("teamSize").value);
        this.leader = document.getElementById("leader").value;
        this.solution = document.getElementById("solution").value;
    }

    verifyData(){
        this.readData();

        if( typeof this.name !== 'string' || typeof this.area !== 'string' || typeof this.profession !== 'string' || this.team !== 'S' && this.team !== 'N' || typeof this.teamSize !== 'number' || this.leader !== 'S' && this.leader !== 'N'|| typeof this.solution !== 'string'){

            alert('Por favor, preencha todos os campos corretamente!')

            return null;

        }else{

            return new Project(
                this.name, 
                this.area, 
                this.profession,
                this.team,
                this.leader, 
                this.teamSize, 
                this.solution
            )
        }
    }

    saveData(){
      let newProjec =  this.verifyData();

      if(newProjec){
        names.push(newProjec.name);
        areas.push(newProjec.area);
        professions.push(newProjec.profession);
        teams.push(newProjec.team);
        teamSizes.push(newProjec.teamSize);
        leaders.push(newProjec.leader);
        solutions.push(newProjec.solution)
      }

    }
}