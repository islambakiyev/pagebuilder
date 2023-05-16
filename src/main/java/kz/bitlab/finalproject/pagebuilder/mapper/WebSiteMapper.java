package kz.bitlab.finalproject.pagebuilder.mapper;

import kz.bitlab.finalproject.pagebuilder.dto.WebSiteDTO;
import kz.bitlab.finalproject.pagebuilder.model.WebSite;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WebSiteMapper {
    WebSiteDTO toDto (WebSite webSite);
    WebSite toEntity (WebSiteDTO webSiteDTO);
    List<WebSiteDTO> toDtoList(List<WebSite> webSites);
}
