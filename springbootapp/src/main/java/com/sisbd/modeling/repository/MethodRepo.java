package com.sisbd.modeling.repository;

import com.sisbd.modeling.model.Interface;
import com.sisbd.modeling.model.Method;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MethodRepo extends JpaRepository<Method, Long> {

}