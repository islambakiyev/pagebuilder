package kz.bitlab.finalproject.pagebuilder.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BlockDTO {
    private Long id;
    private String type;
    private String text;
}
