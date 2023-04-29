package com.sisbd.modeling.repository;

import com.sisbd.modeling.model.Interface;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InterfaceRepo extends JpaRepository<Interface, Long> {

}