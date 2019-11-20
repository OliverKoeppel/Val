package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.panel.Panel;
import org.apache.wicket.model.Model;
import org.apache.wicket.model.PropertyModel;


public class ModalInfoPanel extends Panel {


    private Project project;

    public ModalInfoPanel(String id, Project project, ModalWindow infoModalWindow) {
        super(id);
        this.project = project;

        LabelLink closeModalWindowButton = new LabelLink("closeButton", Model.of("String"), "close") {
            @Override
            public void onClick(AjaxRequestTarget target) {
                infoModalWindow.close(target);
            }
        };
        add(closeModalWindowButton);

    }

    public void setProject(Project project) {
        this.project = project;
    }

    @Override
    protected void onConfigure() {

        super.onConfigure();
        removeAll();
        add(new Label("title2", Model.of(project.getTitle())));
        add(new Label("title", new PropertyModel<>(project, "title")));
        add(new Label("startDate", new PropertyModel<>(project, "startDate")));
        add(new Label("endDate", new PropertyModel<>(project, "endDate")));
        add(new Label("projectLead", Model.of(project.getProjectLead().getFullName())));
        add(new Label("teamMembers", Model.of(project.getTeam().getFullTeamNames())));
    }



}
