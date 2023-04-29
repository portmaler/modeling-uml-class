package com.sisbd.modeling.repository;

import com.sisbd.modeling.model.Interface;
import com.sisbd.modeling.model.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParameterRepo extends JpaRepository<Parameter, Long> {

}