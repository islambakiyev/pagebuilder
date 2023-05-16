package kz.bitlab.finalproject.pagebuilder.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@Builder
public class WebSiteDTO {
    private Long id;
    private String name;
    private String link;
    private String description;
    private UserDTO user;
}
