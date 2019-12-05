 import {Human} from "./Human";
import {Project} from "./Project";
import {Team} from "./Team";

 export class ProjectListFactory {


    constructor () {

        let member1 = new Human("firstMember1", "lastMember1", 52);
        let member2 = new Human("firstMember2", "lastMember2", 25);
        let member3 = new Human("firstMember3", "lastMember3", 45);
        let member4 = new Human("firstMember4", "lastMember4", 34);
        let member5 = new Human("firstMember5", "lastMember5", 67);
        let member6 = new Human("firstMember6", "lastMember6", 23);
        let member7 = new Human("firstMember7", "lastMember7", 20);
        let member8 = new Human("firstMember8", "lastMember8", 31);
        let member9 = new Human("firstMember9", "lastMember9", 46);
        let member10 = new Human("firstMember10", "lastMember10", 35);


        let team1 = new Team([member1, member2, member3]);
        let team2 = new Team([member4, member5]);
        let team3 = new Team([member6, member7, member8]);
        let team4 = new Team([member8, member9]);
        let team5 = new Team([member9, member10]);

        let project1 = new Project("Build Project 1", new Date(2019, 1, 1), new Date (2019, 1, 3), new Human("firstLead1", "lastLead1", 51), team1);
        let project2 = new Project("Build Project 2", new Date (2019, 11, 1), new Date (2019, 11, 20), new Human("firstLead2", "lastLead2", 37), team2);
        let project3 = new Project("Build Project 3", new Date (2019, 1, 1), new Date (2019, 1, 3), new Human("firstLead3", "lastLead3", 48), team3);
        let project4 = new Project("Hackathon", new Date (2019, 12, 1), new Date (2019, 12, 30), new Human("firstLead4", "lastLead4", 49), team4);
        let project5 = new Project("Development Project 1", new Date (2019, 3, 3), new Date (2019, 6, 6), new Human("firstLead5", "lastLead5", 27), team5);

        return ([project1, project2, project3, project4, project5]);
    }

}