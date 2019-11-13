package de.valtech;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;
import org.apache.wicket.markup.html.WebMarkupContainer;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.model.Model;


public class ValPage extends WebPage {


    public ValPage() {

        ProjectListFactory projectListFactory = new ProjectListFactory();
        ProjectListModel projectListModel = projectListFactory.createNewProjectList();

        final ModalWindow infoModalWindow = new ModalWindow("infoModalWindow");
        add(infoModalWindow);
        ModalInfoPanel modalInfoPanel = new ModalInfoPanel(infoModalWindow.getContentId(), projectListModel.getObject().get(0)); //"modalInfoPanel"
        infoModalWindow.setContent(modalInfoPanel);
        infoModalWindow.setTitle("Detailed Project Information");


        add(new Label("userTag", "userName"));

        TextField userTxt = new TextField<>("searchText", Model.of(""));

        final WebMarkupContainer repeatingViewContainer = new WebMarkupContainer("repeatingViewContainer");
        add(repeatingViewContainer);
        repeatingViewContainer.setOutputMarkupId(true);
        ProjectRepeatingView projectRepeatingView = new ProjectRepeatingView("output_view", projectListModel, infoModalWindow, modalInfoPanel);
        repeatingViewContainer.add(projectRepeatingView);

        AjaxLink ajaxLink = new AjaxLink<Link>("ajaxLink") {
            @Override
            public void onClick(AjaxRequestTarget target) {
                projectRepeatingView.setOutputList(projectListModel.searchProjects(userTxt.getDefaultModelObjectAsString()));
                target.add(repeatingViewContainer);
            }
        };


        Form<String> form = new Form<>("userForm");
        form.add(userTxt);
        form.add(ajaxLink);
        add(form);

    }
}


