package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.form.AjaxButton;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.model.Model;


public class ValPage extends WebPage {


    public ValPage() {

        ProjectListFactory projectListFactory = new ProjectListFactory();
        ProjectListModel projectListModel = projectListFactory.createNewProjectList();

        add(new Label("userTag", getString("label.name")));

        //icon - done in HTML

        TextField userTxt = new TextField<>("text", Model.of(""));


        //outputDisplay
        final WebMarkupContainer repeatingViewContainer = new WebMarkupContainer("repeatingViewContainer");
        add(repeatingViewContainer);
        repeatingViewContainer.setOutputMarkupId(true);
        ProjectRepeatingView projectRepeatingView = new ProjectRepeatingView("output_view", projectListModel);
        repeatingViewContainer.add(projectRepeatingView);

        AjaxButton ajaxSubmitButton = new AjaxButton("submitButton") {
            @Override
            protected void onSubmit(AjaxRequestTarget target) {
                super.onSubmit(target);
                projectRepeatingView.setOutputList(projectListModel.searchProjects(userTxt.getDefaultModelObjectAsString()));
                target.add(repeatingViewContainer);
            }
        };


        Form<String> form = new Form<>("userForm");
        form.add(userTxt);
        form.add(ajaxSubmitButton);
        add(form);

    }
}


