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
public class Link {

    @Id
    @GeneratedValue
    private Long id;
    private String Source;
    private String Cible;
    private String AssociationType;
    private String MultiplicitySource;
    private String MultiplicityCible;




}
