
export class Team {

    constructor(teamMember){
        this.teamMember = teamMember;
        }



  getFullTeamNames(){
    let output ="";

     this.teamMember.forEach(h => {
         if (output.equals("",true)) {
             output = h.getFullName();
         }else{
         output = output+"; " + h.getFullName();
         }}
 );
    return output;
}

}