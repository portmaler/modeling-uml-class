package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import lombok.*;

@NoArgsConstructor
@Entity
@Data
@JacksonXmlRootElement(localName = "Link")
@XmlAccessorType(XmlAccessType.PROPERTY)
public class Link {

    @Id
    @GeneratedValue
    @JacksonXmlProperty(isAttribute = true)
    private Long id;

    @JacksonXmlProperty(localName = "Source")
    private Long source;

    @JacksonXmlProperty(localName = "Cible")
    private Long cible;

    @JacksonXmlProperty(isAttribute = true, localName = "AssociationType")
    private String associationType;

    @JacksonXmlProperty(localName = "MultiplicitySource")
    private String multiplicitySource;

    @JacksonXmlProperty(localName = "MultiplicityCible")
    private String multiplicityCible;

    public Link(Long source, Long cible, String associationType, String multiplicitySource, String multiplicityCible) {
        this.source = source;
        this.cible = cible;
        this.associationType = associationType;
        this.multiplicitySource = multiplicitySource;
        this.multiplicityCible = multiplicityCible;
    }
}
