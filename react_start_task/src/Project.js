export class Project {

    constructor( title,  startDate,  endDate,  projectLead,  team) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.projectLead = projectLead;
    this.team = team;
    }



getProjectLead() {
    return this.projectLead;
}

 getTeam() {
    return this.team;
}

 getTitle() {
    return this.title;
}

 getStartDate() {
    return this.startDate;
}

 getEndDate() {
    return this.endDate;
}

}
