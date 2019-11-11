package de.valtech;

import org.apache.wicket.model.util.ListModel;

import java.time.LocalDate;
import java.util.Arrays;

public class ProjectListFactory {


    public ProjectListModel createNewProjectList() {

        Human member1 = new Human("firstMember1", "lastMember1", 52);
        Human member2 = new Human("firstMember2", "lastMember2", 25);
        Human member3 = new Human("firstMember3", "lastMember3", 45);
        Human member4 = new Human("firstMember4", "lastMember4", 34);
        Human member5 = new Human("firstMember5", "lastMember5", 67);
        Human member6 = new Human("firstMember6", "lastMember6", 23);
        Human member7 = new Human("firstMember7", "lastMember7", 20);
        Human member8 = new Human("firstMember8", "lastMember8", 31);
        Human member9 = new Human("firstMember9", "lastMember9", 46);
        Human member10 = new Human("firstMember10", "lastMember10", 35);


        Team team1 = new Team(Arrays.asList(member1, member2, member3));
        Team team2 = new Team(Arrays.asList(member4, member5));
        Team team3 = new Team(Arrays.asList(member6, member7, member8));
        Team team4 = new Team(Arrays.asList(member8, member9));
        Team team5 = new Team(Arrays.asList(member9, member10));

        Project project1 = new Project("Build Project 1", LocalDate.of(2019, 1, 1), LocalDate.of(2019, 1, 3), new Human("firstLead1", "lastLead1", 51), team1);
        Project project2 = new Project("Build Project 2", LocalDate.of(2019, 11, 1), LocalDate.of(2019, 11, 20), new Human("firstLead2", "lastLead2", 37), team2);
        Project project3 = new Project("Build Project 3", LocalDate.of(2019, 1, 1), LocalDate.of(2019, 1, 3), new Human("firstLead3", "lastLead3", 48), team3);
        Project project4 = new Project("Hackathon", LocalDate.of(2019, 12, 1), LocalDate.of(2019, 12, 30), new Human("firstLead4", "lastLead4", 49), team4);
        Project project5 = new Project("Development Project 1", LocalDate.of(2019, 3, 3), LocalDate.of(2019, 6, 6), new Human("firstLead5", "lastLead5", 27), team5);

        return (new ProjectListModel(Arrays.asList(project1, project2, project3, project4, project5)));
    }

}
