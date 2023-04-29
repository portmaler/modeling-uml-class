package com.sisbd.modeling.repository;

import com.sisbd.modeling.model.Interface;
import com.sisbd.modeling.model.Link;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LinkRepo extends JpaRepository<Link, Long> {

}