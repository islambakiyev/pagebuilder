package kz.bitlab.finalproject.pagebuilder.repository;

import jakarta.transaction.Transactional;
import kz.bitlab.finalproject.pagebuilder.model.Block;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
@Transactional
public interface BlockRepository extends JpaRepository<Block, Long> {

}
