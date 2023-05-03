package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import lombok.*;


@XmlAccessorType(XmlAccessType.FIELD)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@JacksonXmlRootElement(localName = "Link")
public class Link {

    @Id
    @GeneratedValue
    private Long id;

    private Long Source;
    @JacksonXmlProperty(isAttribute = true)
    private Long Cible;
    @JacksonXmlProperty(isAttribute = true)
    private String AssociationType;
    @JacksonXmlProperty(isAttribute = true)
    private String MultiplicitySource;
    @JacksonXmlProperty(isAttribute = true)
    private String MultiplicityCible;

    public Link(Long source, Long cible, String associationType, String multiplicitySource, String multiplicityCible) {
        Source = source;
        Cible = cible;
        AssociationType = associationType;
        MultiplicitySource = multiplicitySource;
        MultiplicityCible = multiplicityCible;
    }
}
