package kz.bitlab.finalproject.pagebuilder.mapper;

import kz.bitlab.finalproject.pagebuilder.dto.PageDTO;
import kz.bitlab.finalproject.pagebuilder.model.Page;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PageMapper {

    @Mapping(source = "webSite.id", target = "webSiteId")
    PageDTO toDto (Page page);

    Page toEntity(PageDTO pageDTO);
    List<PageDTO> toDtoList(List<Page> pages);
}
