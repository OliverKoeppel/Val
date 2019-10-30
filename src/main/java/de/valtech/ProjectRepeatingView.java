package de.valtech;

import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.repeater.RepeatingView;
import org.apache.wicket.model.IModel;

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
    protected void onConfigure() {
        super.onConfigure();
        //add entries to repeatingView
        for (String k : this.getOutputList().getObject()) {
            this.add(new Label(this.newChildId(), "" + k));
        }
    }
}
