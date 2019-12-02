package de.valtech;

import java.io.Serializable;

class Human implements Serializable {

    private String firstName;
    private String lastName;



    Human(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    String getFullName(){
        return (firstName +" "+ lastName);
    }
}
