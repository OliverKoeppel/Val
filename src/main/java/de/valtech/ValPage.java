package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.form.AjaxButton;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.model.Model;

import java.util.Arrays;


public class ValPage extends WebPage {

    private ProjectListModel projectListModel = new ProjectListModel(Arrays.asList("Build Project 1", "Development Project", "Build Project 2", "Hackaton", "Development Project 2", "Build Project 3"));

    public ValPage() {

        add(new Label("userTag", "userName"));

        Form<String> searchForm = new Form<>("searchForm");
        add(searchForm);

        TextField userTxt = new TextField<>("text", Model.of(""));
        searchForm.add(userTxt);

        final WebMarkupContainer repeatingViewContainer = new WebMarkupContainer("repeatingViewContainer");
        repeatingViewContainer.setOutputMarkupId(true);
        add(repeatingViewContainer);

        ProjectRepeatingView projectRepeatingView = new ProjectRepeatingView("output_view", projectListModel);
        repeatingViewContainer.add(projectRepeatingView);

        AjaxButton ajaxSubmitButton = new AjaxButton("submitButton") {
            @Override
            protected void onSubmit(AjaxRequestTarget target) {
                if (userTxt.getDefaultModelObjectAsString() != "") {
                    super.onSubmit(target);
                    projectRepeatingView.removeAll();
                    projectRepeatingView.setOutputList(projectListModel.searchProjects(userTxt.getDefaultModelObjectAsString()));
                    target.add(repeatingViewContainer);
                }
            }
        };
        searchForm.add(ajaxSubmitButton);


    }
}


