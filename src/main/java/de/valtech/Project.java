package de.valtech;

import org.apache.wicket.model.util.ListModel;

import java.io.Serializable;
import java.time.LocalDate;

public class Project implements Serializable {

    private String title;
    private LocalDate startDate;
    private LocalDate endDate;
    private Human projectLead;
    private ListModel<Human> teamMembers;

    public Project(String title, LocalDate startDate, LocalDate endDate, Human projectLead, ListModel teamMembers) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectLead = projectLead;
        this.teamMembers = teamMembers;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public Human getProjectLead() {
        return projectLead;
    }

    public ListModel<Human> getTeamMembers() {
        return teamMembers;
    }

    public String getTitle() {
        return title;
    }
}
