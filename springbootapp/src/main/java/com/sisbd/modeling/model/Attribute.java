package com.sisbd.modeling.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Attribute {

    @Id
    @GeneratedValue

    private Long id;
    private String name;
    private String type;
    private String visibility;

    public String toString() {
        return "{\"name\": \"" + this.name + "\", \"type\": \"" + this.type + "\", \"visibility\":\"" + this.visibility + "\" }";
    }
}
