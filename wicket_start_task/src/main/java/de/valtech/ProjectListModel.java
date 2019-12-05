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



}