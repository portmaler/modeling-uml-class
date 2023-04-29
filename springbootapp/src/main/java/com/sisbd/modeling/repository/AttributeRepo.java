package com.sisbd.modeling.repository;

import com.sisbd.modeling.model.Attribute;
import com.sisbd.modeling.model.Interface;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttributeRepo extends JpaRepository<Attribute, Long> {

}