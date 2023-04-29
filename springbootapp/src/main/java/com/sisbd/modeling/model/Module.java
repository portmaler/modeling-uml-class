package com.sisbd.modeling.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Module {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(targetEntity = Package.class, cascade = CascadeType.ALL)
    @JoinColumn(name ="module_pac_fk", referencedColumnName = "id")
    private List<Package> packages;
}
