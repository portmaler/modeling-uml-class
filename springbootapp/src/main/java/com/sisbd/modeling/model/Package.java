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
}
