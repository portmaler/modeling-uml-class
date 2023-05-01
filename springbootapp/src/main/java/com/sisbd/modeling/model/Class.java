package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.*;
import lombok.*;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@XmlAccessorType(XmlAccessType.PROPERTY)
@JacksonXmlRootElement(localName = "Class")
public class Class {
    @Id
    @GeneratedValue
    @JacksonXmlProperty(isAttribute = true)
    private Long id;
    @JacksonXmlProperty
    private String Name;
    @JacksonXmlProperty
    private Long Parent;
    @JacksonXmlProperty(isAttribute = true)
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

    public void setVisibility(String visibility) {
        Visibility = visibility;
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
    public String getVisibility() {
        return Visibility;
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
/* public String toString() {
        return "{\"key\":" + this.id + ", \"name\" : \"" + this.Name + "\", \"properties\" :" + this.Attributes + ", \"methods\":" + this.Methods + "}";
    }*/
}
