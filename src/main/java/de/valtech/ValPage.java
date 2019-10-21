package de.valtech;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.repeater.RepeatingView;
import org.apache.wicket.model.IModel;
import org.apache.wicket.extensions.ajax.markup.html.autocomplete.AutoCompleteTextField;


import java.util.*;


public class ValPage extends WebPage {

    private static List<String> projectList = Arrays.asList("Build Project 1", "Development Project", "Build Project 2", "Hackaton", "Development Project 2", "Build Project 3");


    public ValPage() {

        //userLabel
        add(new Label("userTag", getString("label.name")));


        //icon - done in HTML


        //searchbar


        //outputDisplay
        RepeatingView rv = new RepeatingView("output_list");
        add(rv);

        List<String> listToBeDisplayed = searchProjects("Build Project"); //CHANGE TO SEARCHBAR LATER

        for (String k : listToBeDisplayed) {
            rv.add(new Label(rv.newChildId(), "" + k));
        }
    }


    //checks if search String is part of items in projectList
    public static List<String> searchProjects(String searchString) {
        List<String> output = new ArrayList<String>() {
        };
        for (String i : projectList) {
            if (i.contains(searchString))
                output.add(i);
        }

        return output;
    }


    public static void main(String[] args) {
        System.out.println(Arrays.toString(searchProjects("Build Project").toArray()));
    }
}


