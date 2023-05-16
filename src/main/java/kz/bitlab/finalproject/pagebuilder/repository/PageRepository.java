package kz.bitlab.finalproject.pagebuilder.repository;

import jakarta.transaction.Transactional;
import kz.bitlab.finalproject.pagebuilder.model.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Transactional
public interface PageRepository extends JpaRepository<Page, Long> {
    List<Page> findAllByWebSite_Id(Long id);
}
