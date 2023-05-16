package kz.bitlab.finalproject.pagebuilder.mapper;

import kz.bitlab.finalproject.pagebuilder.dto.UserDTO;
import kz.bitlab.finalproject.pagebuilder.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO (User user);
    User toEntity(UserDTO userDto);
}
