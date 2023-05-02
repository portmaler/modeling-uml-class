package com.sisbd.modeling.repository;


import com.sisbd.modeling.dto.ModuleDTO;
import com.sisbd.modeling.model.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ModuleRepo extends JpaRepository<Module, Long> {

  /*  @Query("SELECT new com.sisbd.modeling.dtoModuleDTO(m.id, m.name) FROM Module m")
    List<ModuleDTO> findAllModules();*/

}