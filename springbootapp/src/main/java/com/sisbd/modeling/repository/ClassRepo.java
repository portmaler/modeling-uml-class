package com.sisbd.modeling.repository;


import com.sisbd.modeling.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepo extends JpaRepository<Class, Long> {

}