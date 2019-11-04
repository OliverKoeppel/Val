package de.valtech;

import org.apache.wicket.model.util.ListModel;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProjectListModel extends ListModel<String> {


    public ProjectListModel(List<String> list) {
        super(list);

    }

    public ProjectListModel() {
        super(Collections.emptyList());
    }

    public ProjectListModel searchProjects(String searchString) {

        List<String> outputList = new ArrayList<>();

        for (String i : this.getObject()) {

            if (i.contains(searchString)) {
                outputList.add(i);
            }
        }
        return new ProjectListModel(outputList);
    }

}