package com.sisbd.modeling.model;

import jakarta.persistence.*;

import java.util.List;

public class Interface {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Long parent;
    private String visibility;
    @OneToMany(targetEntity = Attribute.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="class_att_fk", referencedColumnName = "id")
    private List<Attribute> properties;
    @OneToMany(targetEntity = Method.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="class_met_fk", referencedColumnName = "id")
    private List<Method> methods;


    public String toString() {
        return "{\"key\":" + this.id + ", \"name\" : \"" + this.name + "\", \"properties\" :" + this.properties + ", \"methods\":" + this.methods + "}";
    }
}
