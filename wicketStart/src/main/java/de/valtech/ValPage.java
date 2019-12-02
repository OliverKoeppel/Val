package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.form.AjaxSubmitLink;
import org.apache.wicket.extensions.ajax.markup.html.autocomplete.AutoCompleteTextField;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.model.Model;

import java.util.Collections;
import java.util.Iterator;
import java.util.List;


public class ValPage extends WebPage {


    public ValPage() {

        ProjectListModel projectListModel = ProjectListFactory.createNewProjectList();

        final ModalWindow infoModalWindow2 = new ModalWindow("infoModalWindow2");
        infoModalWindow2.setTitle("Detailed Project Information");
        add(infoModalWindow2);

        ModalContentPage modalContentPage = new ModalContentPage(infoModalWindow2);
        infoModalWindow2.setPageCreator(() -> modalContentPage);


        add(new Label("userTag", "userName"));

        Form<String> form = new Form<>("userForm");
        add(form);

        AutoCompleteTextField<String> userTxt = new AutoCompleteTextField<String>("searchText", Model.of("")) {
            @Override
            protected Iterator<String> getChoices(String input) {
                List<String> projectNamesList = new java.util.ArrayList<>(Collections.emptyList());

                if (input.isEmpty()) {
                    return projectNamesList.iterator();
                }

                List<Project> choices = projectListModel.searchProjects(input).getObject();

                for (Project project : choices) {
                    projectNamesList.add(project.getTitle());
                }
                return projectNamesList.iterator();
            }
        };
        userTxt.setOutputMarkupId(true);
        form.add(userTxt);

        final WebMarkupContainer repeatingViewContainer = new WebMarkupContainer("repeatingViewContainer");
        add(repeatingViewContainer);
        repeatingViewContainer.setOutputMarkupId(true);
        ProjectRepeatingView projectRepeatingView = new ProjectRepeatingView("output_view", projectListModel, modalContentPage, infoModalWindow2);
        repeatingViewContainer.add(projectRepeatingView);

        AjaxSubmitLink startSearch = new AjaxSubmitLink("startSearch", form) {

            @Override
            public void onSubmit(AjaxRequestTarget target) {
                projectRepeatingView.setOutputList(projectListModel.searchProjects(userTxt.getDefaultModelObjectAsString()));
                target.add(repeatingViewContainer);
            }
        };

        AjaxSubmitLink clearSearch = new AjaxSubmitLink("clearSearch", form) {

            @Override
            public void onSubmit(AjaxRequestTarget target) {
                userTxt.setDefaultModel(Model.of(""));
                projectRepeatingView.setOutputList(projectListModel.searchProjects(""));
                target.add(repeatingViewContainer);
                target.add(userTxt);
            }
        };

        form.add(startSearch);
        form.add(clearSearch);
        form.setDefaultButton(startSearch);

    }
}


