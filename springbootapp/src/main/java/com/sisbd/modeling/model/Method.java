package com.sisbd.modeling.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Method {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String type;
    @OneToMany(targetEntity = Parameter.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="method_par_fk", referencedColumnName = "id")
    private List<Parameter> parameters;
    private String visibility;


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
