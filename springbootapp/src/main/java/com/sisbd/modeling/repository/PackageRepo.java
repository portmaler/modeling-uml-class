package com.sisbd.modeling.repository;

import com.sisbd.modeling.model.Interface;
import com.sisbd.modeling.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRepo extends JpaRepository<Package, Long> {

}