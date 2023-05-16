package kz.bitlab.finalproject.pagebuilder.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDTO {
    private Long id;
    private String email;
    private String fullName;
}
