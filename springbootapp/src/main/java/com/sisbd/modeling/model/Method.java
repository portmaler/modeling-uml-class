package com.sisbd.modeling.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Iterator;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@JacksonXmlRootElement(localName = "Method")
public class Method {

    @Id
    @GeneratedValue
    @JacksonXmlProperty(isAttribute = true)
    private Long id;

    private String name;

    private String type;
    @OneToMany(targetEntity = Parameter.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="method_par_fk", referencedColumnName = "id")
    private List<Parameter> parameters;
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
    @JacksonXmlProperty(localName = "Parameter")
    @JacksonXmlElementWrapper(localName = "Parameters")
    public List<Parameter> getParameters() {
        return parameters;
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

    public void setParameters(List<Parameter> parameters) {
        this.parameters = parameters;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        if (this.parameters != null) {
            sb.append(",\"parameters\":[{");
            int siz = this.parameters.size();
            int i = 0;
            Iterator var4 = this.parameters.iterator();

            while(var4.hasNext()) {
                Parameter entry = (Parameter) var4.next();
                ++i;
                sb.append("\"").append((String)entry.getName()).append("\"").append(":\"").append((String)entry.getType()).append("\"");
                if (i < siz) {
                    sb.append(",");
                }
            }
        } else if (this.type != null) {
            sb.append(",\"type\": \"").append(this.type).append("\"");
        }

        return "{\"name\": \"" + this.name + "\"" + sb + "}], \"visibility\":\"" + this.visibility + "\" }";
    }
}
