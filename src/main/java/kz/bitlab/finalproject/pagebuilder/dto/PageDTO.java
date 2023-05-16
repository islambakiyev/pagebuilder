package kz.bitlab.finalproject.pagebuilder.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class PageDTO {
    private Long id;
    private String title;
    private UserDTO user;
    private Long webSiteId;
    private List<BlockDTO> blocks;
}
