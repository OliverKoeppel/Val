package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.repeater.RepeatingView;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;

public class ProjectRepeatingView extends RepeatingView {

    private ProjectListModel outputList;
    private ModalContentPage modalContentPage;
    private ModalWindow infoModalWindow2;


    ProjectRepeatingView(String id, IModel<?> model, ModalContentPage modalContentPage, ModalWindow infoModalWindow2) {
        super(id, model);
        this.outputList = ProjectListFactory.createNewProjectList();
        this.modalContentPage = modalContentPage;
        this.infoModalWindow2 = infoModalWindow2;
    }


    private ProjectListModel getOutputList() {
        return outputList;
    }

    void setOutputList(ProjectListModel newOutputList) {
        this.outputList = newOutputList;
    }


    @Override
    protected void onPopulate() {

        super.onPopulate();
        removeAll();
        for (Project project: this.getOutputList().getObject()) {
            LabelLink labelLink = new LabelLink(this.newChildId(), Model.of("String"), project.getTitle()) {
                @Override
                public void onClick(AjaxRequestTarget target) {
                    modalContentPage.setProject(project);
                    infoModalWindow2.show(target);
                }
            };
            this.add(labelLink);
        }
    }

}
