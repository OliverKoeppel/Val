package de.valtech;

import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;

abstract class LabelLink extends AjaxLink<String> {

    LabelLink(String id, IModel<String> model, String linkTitle) {
        super(id, model);
        Label label = new Label("label", Model.of(linkTitle));
        add(label);
    }

}
