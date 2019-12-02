package de.valtech;

import org.apache.wicket.model.util.ListModel;

import java.util.List;

public class Team extends ListModel<Human> {

    Team(List<Human> team) {
        super(team);
    }

    String getFullTeamNames() {
        String output = "";
        for (Human human : this.getObject()) {
            if (output == "") {
                output += human.getFullName();
            }
            output = output + "; " + human.getFullName();
        }
        return output;
    }

}
