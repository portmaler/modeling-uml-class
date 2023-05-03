package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@XmlAccessorType(XmlAccessType.PROPERTY)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JacksonXmlRootElement(localName = "Module")
public class Module {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(targetEntity = Package.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="module_pac_fk", referencedColumnName = "id")
    private List<Package> packages;

    @OneToMany(targetEntity = Link.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="module_link_fk", referencedColumnName = "id")
    private List<Link> links;

    @JacksonXmlProperty(isAttribute = true)
    public Long getId() {
        return id;
    }
    @JacksonXmlProperty(localName = "Name")
    public String getName() {
        return name;
    }

    @JacksonXmlElementWrapper(localName = "Packages")
    @JacksonXmlProperty(localName = "Package")
    public List<Package> getPackages() {
        return packages;
    }
    @JacksonXmlElementWrapper(localName = "links")
    @JacksonXmlProperty(localName = "Link")
    public List<Link> getLinks() {
        if (links == null) {
            links = new ArrayList<>();
        }
        return links;
    }

}
