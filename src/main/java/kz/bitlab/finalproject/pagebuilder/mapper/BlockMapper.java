package kz.bitlab.finalproject.pagebuilder.mapper;

import kz.bitlab.finalproject.pagebuilder.dto.BlockDTO;
import kz.bitlab.finalproject.pagebuilder.model.Block;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BlockMapper {
    BlockDTO toDto (Block block);
    Block toEntity(BlockDTO blockDTO);
    List<BlockDTO> toDtoList(List<Block> blocks);
    List<Block> toEntityList(List<BlockDTO> blockDTOList);
}
