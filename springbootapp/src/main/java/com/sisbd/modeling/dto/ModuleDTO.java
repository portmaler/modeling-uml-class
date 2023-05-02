package com.sisbd.modeling.dto;

import com.sisbd.modeling.model.Module;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ModuleDTO {

        private Long id;
        private String name;


        public static ModuleDTO toDto(Module module) {
                return new ModuleDTO(
                        module.getId(),
                        module.getName()

                );
        }


}
