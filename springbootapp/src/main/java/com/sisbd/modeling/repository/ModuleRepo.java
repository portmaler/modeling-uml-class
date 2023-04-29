package com.sisbd.modeling.repository;


import com.sisbd.modeling.model.Module;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepo extends JpaRepository<Module, Long> {

}