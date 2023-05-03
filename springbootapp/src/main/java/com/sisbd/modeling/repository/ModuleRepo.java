package com.sisbd.modeling.repository;


import com.sisbd.modeling.dto.ModuleDTO;
import com.sisbd.modeling.model.Link;
import com.sisbd.modeling.model.Module;
import jakarta.persistence.FlushModeType;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ModuleRepo extends JpaRepository<Module, Long> {

  /*  @Query("SELECT new com.sisbd.modeling.dtoModuleDTO(m.id, m.name) FROM Module m")
    List<ModuleDTO> findAllModules();*/
  /*@Modifying(flushAutomatically = true, flushMode = FlushModeType.COMMIT)
  @Query("update Module m set m.links = :links where m.id = :id")
  void updateModuleLinks(@Param(value = "id") Long id, @Param(value = "links") List<Link> links);
*/


}