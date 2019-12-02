package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.model.Model;
import org.apache.wicket.model.PropertyModel;

public class ModalContentPage extends WebPage {

    private Project project;
    private ModalWindow infoModalWindow2;

    public ModalContentPage(ModalWindow infoModalWindow2) {

        this.project = null;
        this.infoModalWindow2 = infoModalWindow2;


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
        add(new AjaxLink<String>("close", Model.of("close Info")){
               @Override
            public void onClick(AjaxRequestTarget target)
            {
                infoModalWindow2.close(target);
            }
        });
    }
}
