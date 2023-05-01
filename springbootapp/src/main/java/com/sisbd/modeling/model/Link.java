package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;

@XmlAccessorType(XmlAccessType.FIELD)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JacksonXmlRootElement(localName = "Link")
public class Link {

    @Id
    @GeneratedValue
    private Long id;
    @JacksonXmlProperty(isAttribute = true)
    private String Source;
    @JacksonXmlProperty(isAttribute = true)
    private String Cible;
    @JacksonXmlProperty(isAttribute = true)
    private String AssociationType;
    @JacksonXmlProperty(isAttribute = true)
    private String MultiplicitySource;
    @JacksonXmlProperty(isAttribute = true)
    private String MultiplicityCible;




}
