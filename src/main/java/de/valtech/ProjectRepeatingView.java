package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.repeater.RepeatingView;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;

public class ProjectRepeatingView extends RepeatingView {

    private ProjectListModel outputList;
    private ModalWindow infoModalWindow;
    private ModalInfoPanel modalInfoPanel;

    public ProjectRepeatingView(String id, IModel<?> model , ModalWindow infoModalWindow, ModalInfoPanel modalInfoPanel) {
        super(id, model);
        outputList = new ProjectListModel();
        this.infoModalWindow = infoModalWindow;
        this.modalInfoPanel = modalInfoPanel;
    }


    public ProjectListModel getOutputList() {
        return outputList;
    }

    public void setOutputList(ProjectListModel newOutputList) {
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
                    modalInfoPanel.setProject(project);
                    infoModalWindow.show(target);
                }
            };
            this.add(labelLink);
        }
    }
}
