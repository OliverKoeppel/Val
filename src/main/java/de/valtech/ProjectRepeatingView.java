package de.valtech;

import org.apache.wicket.ajax.AjaxEventBehavior;
import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.repeater.RepeatingView;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;

public class ProjectRepeatingView extends RepeatingView {

    private ProjectListModel outputList;

    public ProjectListModel getOutputList() {
        return outputList;
    }

    public void setOutputList(ProjectListModel newOutputList) {
        this.outputList = newOutputList;
    }

    public ProjectRepeatingView(String id, IModel<?> model) {
        super(id, model);
        outputList = new ProjectListModel();
    }

    @Override
    protected void onPopulate() {

        super.onPopulate();
        removeAll();
        ModalWindow infoModalWindow = new ModalWindow("infoModalWindow");

        for (Project k : this.getOutputList().getObject()) {
            LabelLink labelLink = new LabelLink(this.newChildId(), Model.of("Hans"),k.getTitle()){
                @Override
                public void onClick(AjaxRequestTarget target) {
                    ProjectInfoPanel projectInfoPanel = new ProjectInfoPanel(k,"Panel" + k.getTitle(), infoModalWindow);
                    infoModalWindow.setContent(projectInfoPanel);
                    infoModalWindow.show(target);
                }
            };
            this.add(labelLink);
        }
    }
}
