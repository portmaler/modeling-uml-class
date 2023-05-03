package com.sisbd.modeling.dto;

import com.sisbd.modeling.model.Link;
import lombok.Data;

@Data

public class LinkRequestDTO {

    private Long idModule;
    private Long Source;
    private Long Cible;
    private String AssociationType;
    private String MultiplicitySource;
    private String MultiplicityCible;

 public static Link toLink(LinkRequestDTO linkdto) {
        return new Link(
                linkdto.getSource(),
                linkdto.getCible(),
                linkdto.getAssociationType(),
                linkdto.getMultiplicitySource(),
                linkdto.getMultiplicityCible()
        );
    }
}
