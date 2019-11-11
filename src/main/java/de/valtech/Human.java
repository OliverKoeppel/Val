package de.valtech;

import java.io.Serializable;

public class Human implements Serializable {

    private String firstName;
    private String lastName;
    private int age;


    public Human(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public String getFullName(){
        return (firstName +" "+ lastName);
    }
}
