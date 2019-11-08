package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.form.AjaxButton;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.panel.Panel;
import org.apache.wicket.model.PropertyModel;



public class ProjectInfoPanel extends Panel {

    private Project project;

    public ProjectInfoPanel(Project project, String id, ModalWindow modalWindow) {
        super(id);
        this.project = project;

        add(new Label("title", new PropertyModel<>(project, "title")));
        add(new Label("startDate", new PropertyModel<>(project, "startDate")));
        add(new Label("endDate", new PropertyModel<>(project, "endDate")));
        add(new Label("projectLead", new PropertyModel<>(project, "projectLead")));
        add(new Label("teamMembers", new PropertyModel<>(project, "teamMembers")));

        Form closeForm = new Form("closeForm");

        AjaxButton noButton = new AjaxButton("noButton", closeForm) {
            @Override
            protected void onSubmit(AjaxRequestTarget target) {
                if (target != null) {
                    modalWindow.close(target);
                }
            }
        };

        closeForm.add(noButton);
        add(closeForm);

    }
}
