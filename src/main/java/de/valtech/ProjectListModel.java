package de.valtech;

import org.apache.wicket.model.util.ListModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ProjectListModel extends ListModel<String> {


    public ProjectListModel(List<String> list) {
        super(list);
    }

    public ProjectListModel() {
        super(Collections.emptyList());
    }

    //checks if search String is part of items in projectList and returns true items in new list
    public ProjectListModel searchProjects(String searchString) {
        ProjectListModel outputProjectListModel = new ProjectListModel();
        List<String> outputList = new ArrayList<>();

        for (String i : this.getObject()) {

            if (i.contains(searchString)) {

                outputList.add(i);
            }
        }
        outputProjectListModel.setObject(outputList);
        return outputProjectListModel;
    }

}