package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;


@XmlAccessorType(XmlAccessType.PROPERTY)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JacksonXmlRootElement(localName = "Attribute")
public class Attribute {

    @Id
    @GeneratedValue
    @JacksonXmlProperty(isAttribute = true)
    private Long id;
    @JacksonXmlProperty
    private String name;
    @JacksonXmlProperty
    private String type;
    @JacksonXmlProperty(isAttribute = true)
    private String visibility;


    public Long getId() {
        return id;
    }
    @JacksonXmlProperty(localName = "Name")
    public String getName() {
        return name;
    }
    @JacksonXmlProperty(localName = "Type")
    public String getType() {
        return type;
    }

    public String getVisibility() {
        return visibility;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public String toString() {
        return "{\"name\": \"" + this.name + "\", \"type\": \"" + this.type + "\", \"visibility\":\"" + this.visibility + "\" }";
    }
}
