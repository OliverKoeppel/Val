package de.valtech;

import org.apache.wicket.model.util.ListModel;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProjectListModel extends ListModel<Project> {


    public ProjectListModel(List<Project> list) {
        super(list);
    }

    public ProjectListModel() {
        super(Collections.emptyList());
    }

    public ProjectListModel searchProjects(String searchString) {
        if(searchString.isEmpty()){
            return new ProjectListModel(this.getObject());
        }
        ProjectListModel outputProjectListModel = new ProjectListModel();
        List<Project> outputList = new ArrayList<>();

        for (Project i : this.getObject()) {
            if (i.getTitle().contains(searchString)) {
                outputList.add(i);
            }
        }
        outputProjectListModel.setObject(outputList);
        return outputProjectListModel;
    }

}