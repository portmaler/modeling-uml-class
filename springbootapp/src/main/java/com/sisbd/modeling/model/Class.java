package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import lombok.*;

import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Entity
@JacksonXmlRootElement(localName = "Class")
@XmlAccessorType(XmlAccessType.PROPERTY)
public class Class {
    @Id
    @GeneratedValue
    @JacksonXmlProperty(isAttribute = true)
    private Long id;
    @JacksonXmlProperty
    private String Name;
    @JacksonXmlProperty
    private Long Parent;
    @JacksonXmlProperty(isAttribute = true, localName = "visibility")
    private String Visibility;
    @OneToMany(targetEntity = Attribute.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="class_att_fk", referencedColumnName = "id")
    private List<Attribute> Attributes;
    @OneToMany(targetEntity = Method.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="class_met_fk", referencedColumnName = "id")
    private List<Method> Methods;

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        Name = name;
    }

    public void setParent(Long parent) {
        Parent = parent;
    }

    public void setVisibility(String Visibility) {
        Visibility = Visibility;
    }

    public void setAttributes(List<Attribute> attributes) {
        Attributes = attributes;
    }

    public void setMethods(List<Method> methods) {
        Methods = methods;
    }

    public Long getId() {
        return id;
    }
    @JacksonXmlProperty(localName = "Name")
    public String getName() {
        return Name;
    }
    @JacksonXmlProperty(localName = "Parent")
    public Long getParent() {
        return Parent;
    }

    @JacksonXmlProperty(localName = "Attribute")
    @JacksonXmlElementWrapper(localName = "Attributes")
    public List<Attribute> getAttributes() {
        return Attributes;
    }
    @JacksonXmlProperty(localName = "method")
    @JacksonXmlElementWrapper(localName = "Methods")
    public List<Method> getMethods() {
        return Methods;
    }
 public String toString() {
        return "{\"key\":" + this.id + ", \"name\" : \"" + this.Name + "\", \"properties\" :" + this.Attributes + ", \"methods\":" + this.Methods + "},";
    }
}
