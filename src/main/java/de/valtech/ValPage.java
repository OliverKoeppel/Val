package de.valtech;

import org.apache.wicket.extensions.ajax.markup.html.autocomplete.AutoCompleteSettings;
import org.apache.wicket.extensions.ajax.markup.html.autocomplete.AutoCompleteTextField;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.WebPage;



public class ValPage extends WebPage {

	private String[] projectList = {"Build Project 1", "Development Project", "Build Project 2", "Hackaton", "Development Project 2", "Build Project 3"};


	public ValPage() {

	//TODOS

		//userLabel
		add(new Label("userTag","Max Mustermann"));


		//icon - done in HTML



		//searchbar




		//outputDisplay
			//repeatedView to cycle through valid project entries and add a projectname-label to the output field
		/**RepeatingView list = new RepeatingView("list");
		add(list);
		for(int i = 1; i <= 10; i++) {
			list.add(new Label(list.newChildId(), "item"+ i));
		}
	}


	// when starting the search in the searchbar, lookup possible solutions and forward them to the display area
public String[] searchProjects(String searchString){
		String[] output = new String[projectList.length];
		int a = 0;
		for(int i = 0; i <= projectList.length; i++) {
			if (projectList[i].contains(searchString)) {
				output[a] = projectList[i];
				a++;
			}
		}
		 */
	}

}
