package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import java.util.List;

@XmlAccessorType(XmlAccessType.PROPERTY)
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Package {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(targetEntity = Class.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="package_class_fk", referencedColumnName = "id")
    private List<Class> classes;
    @OneToMany(targetEntity = Interface.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="package_int_fk", referencedColumnName = "id")
    private List<Interface> interfaces;
    @OneToMany(targetEntity = Package.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="package_pac_fk", referencedColumnName = "id")
    private List<Package> packages;

    @JacksonXmlProperty(isAttribute = true)
    public Long getId() {
        return id;
    }
    @JacksonXmlProperty(localName = "Name")
    public String getName() {
        return name;
    }
    @JacksonXmlProperty(localName = "Class")
    @JacksonXmlElementWrapper(localName = "Classes")
    public List<Class> getClasses() {
        return classes;
    }
    @JacksonXmlProperty(localName = "Interfaces")
    public List<Interface> getInterfaces() {
        return interfaces;
    }
    @JacksonXmlProperty(localName = "Packages")
    public List<Package> getPackages() {
        return packages;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setClasses(List<Class> classes) {
        this.classes = classes;
    }

    public void setInterfaces(List<Interface> interfaces) {
        this.interfaces = interfaces;
    }

    public void setPackages(List<Package> packages) {
        this.packages = packages;
    }
}
