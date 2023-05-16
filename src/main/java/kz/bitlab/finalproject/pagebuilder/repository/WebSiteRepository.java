package kz.bitlab.finalproject.pagebuilder.repository;

import jakarta.transaction.Transactional;
import kz.bitlab.finalproject.pagebuilder.model.WebSite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface WebSiteRepository extends JpaRepository<WebSite, Long> {
}
