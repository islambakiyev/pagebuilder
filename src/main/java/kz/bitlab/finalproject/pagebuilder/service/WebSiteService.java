package kz.bitlab.finalproject.pagebuilder.service;

import kz.bitlab.finalproject.pagebuilder.dto.WebSiteDTO;
import kz.bitlab.finalproject.pagebuilder.mapper.WebSiteMapper;
import kz.bitlab.finalproject.pagebuilder.model.WebSite;
import kz.bitlab.finalproject.pagebuilder.repository.WebSiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebSiteService {

    @Autowired
    private WebSiteRepository webSiteRepository;

    @Autowired
    private WebSiteMapper webSiteMapper;

    @Autowired
    private UserService userService;

    public WebSiteDTO createWebSite(WebSiteDTO webSite){
        WebSite webSiteEntity = webSiteMapper.toEntity(webSite);
        if(!(webSiteEntity.getUser()!=null && webSite.getUser().getId()!=null)){
            webSiteEntity.setUser(userService.getCurrentUser());
        }
        return webSiteMapper.toDto(webSiteRepository.save(webSiteEntity));
    }

    public List<WebSiteDTO> getSites(){
        List<WebSite> sites = webSiteRepository.findAll();
        return webSiteMapper.toDtoList(sites);
    }

    public WebSiteDTO getSite(Long id){
        return webSiteMapper.toDto(webSiteRepository.findById(id).orElseThrow());
    }

    public WebSite insertSite(WebSite webSite){
        return webSiteRepository.save(webSite);
    }

}
