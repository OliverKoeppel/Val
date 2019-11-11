package de.valtech;

import org.apache.wicket.model.util.ListModel;

import java.io.Serializable;
import java.time.LocalDate;

public class Project implements Serializable {

    private String title;
    private LocalDate startDate;
    private LocalDate endDate;
    private Human projectLead;
    private Team team;

    public Project(String title, LocalDate startDate, LocalDate endDate, Human projectLead, Team team) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectLead = projectLead;
        this.team = team;
    }


    public Human getProjectLead() {
        return projectLead;
    }

    public Team getTeam() {
        return team;
    }

    public String getTitle() {
        return title;
    }
}
